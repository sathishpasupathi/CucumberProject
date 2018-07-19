package skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
	WebDriver driver;
	@Given("^The URL of Git Hub$")
	public void the_URL_of_Git_Hub() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\Driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://github.com/login");
		driver.manage().window().maximize();
	}

	@When("^User enters (.*) as username$")
	public void user_enters_sathishpasupathi_as_username(String username) throws Throwable {
		driver.findElement(By.id("login_field")).sendKeys(username);
	}

	@When("^User enters (.*) as password$")
	public void user_enters_abcd_as_password(String password) throws Throwable {
		driver.findElement(By.id("password")).sendKeys(password);
	}
	
	@Given("^User Clicks on SignIn$")
	public void user_Clicks_on_SignIn() throws Throwable {
		driver.findElement(By.name("commit")).click();
	}

	@Then("^User Navigates to (.*)$")
	public void user_Navigates_to_Git_Hub(String result) throws Throwable {
	if (result.startsWith("Sign"))
	{
		Assert.assertTrue(driver.getTitle().startsWith("Sign"));
	}
	else {
		Assert.assertTrue(driver.getTitle().startsWith("Git"));
	}
	driver.close();
	}
	
	@Then("^User click on Submit$")
	public void user_click_on_Submit() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
}
}
