package cucumber;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import junit.framework.Assert;

public class TestShopping {

	double expectedTotalPrice = 0;
	double actualTotalPrice = 0;
	WebDriver driver = null;
	@Given("^I open a browser, e.g. Chrome$")
	public void openBrowser() {
		System.setProperty("webdriver.chrome.driver","C:\\chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Given("^navigate to \"(.*)\"$")
	public void navigateToURL(String url) {
		driver.navigate().to(url);
	}

	@When("^I add \"(.*)\" to Shopping Cart$")
	public void addItemToCart(String itemName) throws InterruptedException {
		List<WebElement> item = driver.findElements(By.xpath("/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li"));
		for (WebElement i : item) {
			WebElement name = i.findElement(By.xpath("div/div[2]/h5/a"));
			if(name.getText().equals(itemName)) {
				String price = i.findElement(By.xpath("div/div[2]/div[1]/span")).getText();
				expectedTotalPrice += Double.parseDouble(price.replace("$", ""));
				i.findElement(By.xpath("div/div[2]/div[2]/a[1]")).click();
				Thread.sleep(10000);
				driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[2]/div[4]/span")).click();
			}
		}
	}
	
	@When("^I want to view Shopping Cart$")
	public void viewShoppingCart() {
		driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[3]/div/a")).click();
		String price = driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tfoot/tr[1]/td[3]")).getText();
		actualTotalPrice = Double.parseDouble(price.replace("$", ""));
		
	}

	@Then("^I check Total Price$")
	public void checkTotalPrice() {
		driver.findElement(By.xpath("/html/body/div/div[1]/header/div[3]/div/div/div[2]/form/input[4]")).sendKeys(""+actualTotalPrice);
		Assert.assertEquals(expectedTotalPrice, actualTotalPrice, 1e-10);
	}
}
