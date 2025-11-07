// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerplatformManagedEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique environment id (guid), of the environment that is managed by these settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#environment_id PowerplatformManagedEnvironment#environment_id}
  */
  readonly environmentId: string;
  /**
  * Limits how widely canvas apps can be shared. See [Managed Environment sharing limits](https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#is_group_sharing_disabled PowerplatformManagedEnvironment#is_group_sharing_disabled}
  */
  readonly isGroupSharingDisabled: boolean | cdktf.IResolvable;
  /**
  * [Weekly insights digest for the environment](https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#is_usage_insights_disabled PowerplatformManagedEnvironment#is_usage_insights_disabled}
  */
  readonly isUsageInsightsDisabled: boolean | cdktf.IResolvable;
  /**
  * Limits how widely canvas apps can be shared.  See [Managed Environment sharing limits](https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits) for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#limit_sharing_mode PowerplatformManagedEnvironment#limit_sharing_mode}
  */
  readonly limitSharingMode: string;
  /**
  * First-time Power Apps makers will see this content in the Studio.  See [Maker welcome content](https://learn.microsoft.com/power-platform/admin/welcome-content) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#maker_onboarding_markdown PowerplatformManagedEnvironment#maker_onboarding_markdown}
  */
  readonly makerOnboardingMarkdown: string;
  /**
  * Maker onboarding 'Learn more' URL. See [Maker welcome content](https://learn.microsoft.com/power-platform/admin/welcome-content) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#maker_onboarding_url PowerplatformManagedEnvironment#maker_onboarding_url}
  */
  readonly makerOnboardingUrl: string;
  /**
  * Limits how many users can share canvas apps. if 'is_group_sharing_disabled' is 'False', then this values should be '-1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#max_limit_user_sharing PowerplatformManagedEnvironment#max_limit_user_sharing}
  */
  readonly maxLimitUserSharing: number;
  /**
  * Automatically verify solution checker results for security and reliability issues before solution import.  See [Solution Checker enforcement](https://learn.microsoft.com/power-platform/admin/managed-environment-solution-checker) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#solution_checker_mode PowerplatformManagedEnvironment#solution_checker_mode}
  */
  readonly solutionCheckerMode: string;
  /**
  * 
  * # Solution Checker Rules
  * 
  * 
  * List of rules to exclude from solution checker.  See [Solution Checker enforcement](https://learn.microsoft.com/power-platform/admin/managed-environment-solution-checker) for more details.
  * 
  * | Code                                | Description                                                                                          | Summary                                | Guidance URL                                                                                                                               |
  * |-------------------------------------|------------------------------------------------------------------------------------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
  * | meta-remove-dup-reg                 | Checks for duplicate Dataverse plug-in registrations                                                 | Duplicate plug-in registration         | [https://learn.microsoft.com/powerapps/developer/data-platform/best-practices/business-logic/do-not-duplicate-plugin-step-registration](https://learn.microsoft.com/powerapps/developer/data-platform/best-practices/business-logic/do-not-duplicate-plugin-step-registration) |
  * | meta-avoid-reg-no-attribute         | Checks for filtering attributes with Dataverse plug-in registrations                                  | Check plug-in filtering attributes     | [https://learn.microsoft.com/powerapps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration](https://learn.microsoft.com/powerapps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration) |
  * | meta-avoid-reg-retrieve             | Checks for Dataverse plug-ins registered for Retrieve and RetrieveMultiple messages                   | Check plug-ins for Retrieve messages   | [https://learn.microsoft.com/powerapps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple](https://learn.microsoft.com/powerapps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple) |
  * | meta-remove-inactive                | Checks for inactive plug-in configurations in Dataverse                                               | Check inactive plug-ins                | [https://learn.microsoft.com/powerapps/developer/model-driven-apps/best-practices/business-logic/remove-deactivated-disabled-configurations](https://learn.microsoft.com/powerapps/developer/model-driven-apps/best-practices/business-logic/remove-deactivated-disabled-configurations) |
  * | web-avoid-unpub-api                 | Checks for usage of unpublished APIs                                                                  | Avoid unpublished APIs                 | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-unpub-api](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-unpub-api) |
  * | web-avoid-modals                    | Checks if modal dialogs are used                                                                      | Check using modal dialogs              | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-modals](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-modals) |
  * | web-avoid-crm2011-service-odata     | Checks for usage of the Dynamics CRM 2011 Odata 2.0 endpoint                                          | Avoid CRM 2011 OData endpoint          | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-crm2011-service-odata](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-crm2011-service-odata) |
  * | web-avoid-crm2011-service-soap      | Checks for usage of the Dynamics CRM 2011 SOAP endpoint                                               | Avoid CRM 2011 SOAP endpoint           | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-crm2011-service-soap](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-crm2011-service-soap) |
  * | web-avoid-browser-specific-api      | Checks for usage of Internet Explorer legacy APIs or browser plug-ins                                  | Avoid browser specific APIs            | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-browser-specific-api](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-browser-specific-api) |
  * | web-avoid-2011-api                  | Checks for usage of the deprecated Dynamics CRM 2011 object model                                      | Avoid CRM 2011 API                     | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-2011-api](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-2011-api) |
  * | web-use-relative-uri                | Checks for usage of absolute Dataverse endpoint URIs                                                  | Use relative URIs                      | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-relative-uri](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-relative-uri) |
  * | web-use-async                       | Checks for async pattern in web resources                                                             | Check async pattern                    | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-async](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-async) |
  * | web-avoid-window-top                | Checks for usage of window.top API                                                                     | Avoid window.top                       | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-window-top](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-window-top) |
  * | web-use-client-context              | Checks if client context is used                                                                       | Use client context                     | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-client-context](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-client-context) |
  * | web-use-navigation-api              | Checks if navigation API parameters are used                                                           | Use navigation API                     | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-navigation-api](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-navigation-api) |
  * | web-use-offline                     | Checks if offline mode is used                                                                         | Use offline mode                       | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-offline](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-offline) |
  * | web-use-grid-api                    | Checks if the grid APIs are used                                                                       | Use grid API                           | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-grid-api](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-grid-api) |
  * | web-avoid-isactivitytype            | Checks for usage of isActivityType                                                                     | Avoid isActivityType                   | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-isactivitytype](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-isactivitytype) |
  * | meta-avoid-silverlight              | Checks for usage of Silverlight                                                                        | Avoid Silverlight                      | [https://learn.microsoft.com/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#BKMK_Silverlight](https://learn.microsoft.com/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#BKMK_Silverlight) |
  * | meta-avoid-retrievemultiple-annotation | Checks for registering a plugin on RetrieveMultiple of annotation                                      | Check plug-ins for RetrieveMultiple of annotations | [https://learn.microsoft.com/powerapps/developer/data-platform/best-practices/](https://learn.microsoft.com/powerapps/developer/data-platform/best-practices/) |
  * | web-remove-debug-script             | Checks for the usage of debug scripts                                                                  | Remove debug scripts                   | [https://learn.microsoft.com/powerapps/developer/model-driven-apps/best-practices/](https://learn.microsoft.com/powerapps/developer/model-driven-apps/best-practices/) |
  * | web-use-strict-mode                 | Checks if strict mode is used                                                                          | Use strict mode                        | [https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode) |
  * | web-use-strict-equality-operators   | Checks if strict equality operators are used                                                           | Use strict equality operators          | [https://developer.mozilla.org/docs/Web/JavaScript/Equality_comparisons_and_sameness](https://developer.mozilla.org/docs/Web/JavaScript/Equality_comparisons_and_sameness) |
  * | web-avoid-eval                      | Checks for usage of eval function or its functional equivalents                                        | Avoid eval                             | [https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/eval](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/eval) |
  * | app-formula-issues-high             | Checks for high severity formula issues in Canvas apps                                                 | Fix high severity formula issues       | [https://learn.microsoft.com/powerapps/maker/canvas-apps/formula-reference](https://learn.microsoft.com/powerapps/maker/canvas-apps/formula-reference) |
  * | app-formula-issues-medium           | Checks for medium severity formula issues in Canvas apps                                               | Fix medium severity formula issues     | [https://learn.microsoft.com/powerapps/maker/canvas-apps/formula-reference](https://learn.microsoft.com/powerapps/maker/canvas-apps/formula-reference) |
  * | app-formula-issues-low              | Checks for low severity formula issues in Canvas apps                                                  | Fix low severity formula issues        | [https://learn.microsoft.com/powerapps/maker/canvas-apps/formula-reference](https://learn.microsoft.com/powerapps/maker/canvas-apps/formula-reference) |
  * | app-use-delayoutput-text-input      | Checks if delayed loading is used in Canvas apps                                                       | Use delay load                         | [https://learn.microsoft.com/powerapps/maker/canvas-apps/performance-tips#use-delayed-load](https://learn.microsoft.com/powerapps/maker/canvas-apps/performance-tips#use-delayed-load) |
  * | app-reduce-screen-controls          | Checks for excessive controls on a screen in Canvas apps                                               | Reduce screen controls                 | [https://learn.microsoft.com/powerapps/maker/canvas-apps/performance-tips#limit-the-number-of-controls](https://learn.microsoft.com/powerapps/maker/canvas-apps/performance-tips#limit-the-number-of-controls) |
  * | app-include-accessible-label        | Checks if accessible labels are included in Canvas apps                                                | Include accessible label               | [https://www.w3.org/WAI/tutorials/forms/labels/](https://www.w3.org/WAI/tutorials/forms/labels/) |
  * | app-include-alternative-input       | Checks if all interactive elements are accessible to alternative inputs in Canvas apps                  | Include alternative input              | [https://www.w3.org/WAI/tips/developing/#ensure-that-all-interactive-elements-are-keyboard-accessible](https://www.w3.org/WAI/tips/developing/#ensure-that-all-interactive-elements-are-keyboard-accessible) |
  * | app-avoid-autostart                 | Checks for autostart on players within a Canvas app                                                    | Avoid autostart in app                 | [https://digital.gov/2014/06/30/508-accessible-videos-use-a-508-compliant-video-player/](https://digital.gov/2014/06/30/508-accessible-videos-use-a-508-compliant-video-player/) |
  * | app-include-captions                | Without captions, people with disabilities may not get any of the information in a video or audio segment | Missing captions                       | [https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues](https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues) |
  * | app-make-focusborder-visible        | If the focus isn't visible, people who don't use a mouse won't be able to see it when they're interacting with the app | Focus isn't showing                    | [https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues](https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues) |
  * | app-include-helpful-control-setting | Changing this property setting will give the user better information about the function of the controls in your app | Missing helpful control settings       | [https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues](https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues) |
  * | app-avoid-interactive-html          | Your app won't work correctly and will not be accessible if you place interactive HTML elements        | If this HTML contains interactive elements, consider using another method, or remove the HTML from this element | [https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues](https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues) |
  * | app-include-readable-screen-name    | People who are blind, have low vision, or a reading disability rely on screen titles to navigate using the screen reader | Revise screen name                     | [https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues](https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues) |
  * | app-include-state-indication-text   | Users won't get confirmation of their actions if the state of the control isn't showing                | Add State indication text              | [https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues](https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues) |
  * | app-include-tab-order               | When a screen reader reads the elements of a slide, it's important that they appear in the order that a user would see them, instead of the order they were added to the slide | Check the order of the screen items    | [https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues](https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues) |
  * | app-include-tab-index               | People who use the keyboard with your app will not be able to access this element without a tab stop   | Missing tab stop                       | [https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues](https://learn.microsoft.com/power-apps/maker/canvas-apps/accessibility-checker#types-of-issues) |
  * | connector-validate-pngiconimage         | The icon image is invalid.Icon image should be valid image file and must be submitted in PNG format as icon.png. | The icon image is invalid.Icon image should be valid image file and must be submitted in PNG format as icon.png. | [https://go.microsoft.com/fwlink/?linkid=2244166](https://go.microsoft.com/fwlink/?linkid=2244166)                                         |
  * | connector-validate-iconsize             | The icon image size is invalid. Update the icon dimensions to 1:1 within the range of 100x100 to 230x230 pixels. | The icon image size is invalid. Update the icon dimensions to 1:1 within the range of 100x100 to 230x230 pixels. | [https://go.microsoft.com/fwlink/?linkid=2244166](https://go.microsoft.com/fwlink/?linkid=2244166)                                         |
  * | connector-validate-backgroundwithbrandiconcolor | The background color of icon image is invalid. Update with consistent background.                    | The background color of icon image is invalid. Update with consistent background. | [https://go.microsoft.com/fwlink/?linkid=2244166](https://go.microsoft.com/fwlink/?linkid=2244166)                                         |
  * | web-unsupported-syntax                  |                                                                                                      |                                                                         | [http://go.microsoft.com/fwlink/?LinkID=398563&error=web-unsupported-syntax&client=PAChecker](http://go.microsoft.com/fwlink/?LinkID=398563&error=web-unsupported-syntax&client=PAChecker) |
  * | flow-avoid-recursive-loop               | Avoid recursive action as they may result in an infinite trigger loop                                | Avoid recursive action as they may result in an infinite trigger loop   | [https://learn.microsoft.com/flow/error-checker](https://learn.microsoft.com/flow/error-checker)                                           |
  * | flow-avoid-invalid-reference            | Include valid references for actions                                                                 | Include valid references for actions                                    | [https://learn.microsoft.com/flow/error-checker](https://learn.microsoft.com/flow/error-checker)                                           |
  * | flow-outlook-attachment-missing-info    | Include all required outlook attachment information                                                  | Include all required outlook attachment information                     | [https://learn.microsoft.com/flow/error-checker](https://learn.microsoft.com/flow/error-checker)                                           |
  * | meta-include-missingunmanageddependencies | Checks for missing unmanaged dependencies in the solution. Missing unmanaged dependencies will cause a solution to fail to import in a target environment | Checks for missing unmanaged dependencies in the solution. Missing unmanaged dependencies will cause a solution to fail to import in a target environment | [https://learn.microsoft.com/troubleshoot/power-platform/power-apps/solutions/missing-dependency-on-solution-import](https://learn.microsoft.com/troubleshoot/power-platform/power-apps/solutions/missing-dependency-on-solution-import) |
  * | web-remove-alert                        | Checks for usage of alert function or its functional equivalents                                      | Remove alerts                                                           | [https://eslint.org/docs/rules/no-alert](https://eslint.org/docs/rules/no-alert)                                                           |
  * | web-remove-console                      | Checks for the usage of methods on console                                                            | Remove console statements                                               | [https://eslint.org/docs/rules/no-console](https://eslint.org/docs/rules/no-console)                                                       |
  * | web-use-global-context                  | Checks if global context is used                                                                      | Use global context                                                      | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-global-context](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-global-context) |
  * | web-use-org-setting                     | Checks if org settings are used                                                                       | Use organization settings                                               | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-org-setting](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-org-setting) |
  * | app-testformula-issues-high             | Checks for high severity formula issues in Test Studio Canvas apps                                    | Fix high severity formula issues for Test Studio                        | [https://learn.microsoft.com/powerapps/maker/canvas-apps/working-with-test-studio#test-functions](https://learn.microsoft.com/powerapps/maker/canvas-apps/working-with-test-studio#test-functions) |
  * | app-testformula-issues-medium           | Checks for medium severity formula issues in Test Studio Canvas apps                                  | Fix medium severity formula issues for Test Studio                      | [https://learn.microsoft.com/powerapps/maker/canvas-apps/working-with-test-studio#test-functions](https://learn.microsoft.com/powerapps/maker/canvas-apps/working-with-test-studio#test-functions) |
  * | app-testformula-issues-low              | Checks for low severity formula issues in Test Studio Canvas apps                                     | Fix low severity formula issues for Test Studio                         | [https://learn.microsoft.com/powerapps/maker/canvas-apps/working-with-test-studio#test-functions](https://learn.microsoft.com/powerapps/maker/canvas-apps/working-with-test-studio#test-functions) |
  * | flow-avoid-connection-mode              | Use connection references instead of connections.                                                     | Use connection references instead of connections.                       | [https://learn.microsoft.com/powerapps/maker/data-platform/create-connection-reference#updating-a-flow-to-use-connection-references-instead-of-connections](https://learn.microsoft.com/powerapps/maker/data-platform/create-connection-reference#updating-a-flow-to-use-connection-references-instead-of-connections) |
  * | web-avoid-with                          | Checks for usage of 'with' operator                                                                   | Avoid 'with' operator                                                   | [https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/with](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/with) |
  * | web-avoid-loadtheme                     | Checks for usage of the loadTheme Fluent v8 API                                                       | Avoid LoadTheme API                                                     | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-loadtheme](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/avoid-loadtheme) |
  * | web-use-getsecurityroleprivilegesinfo   | Checks for usage of userSettings.securityRolePrivileges                                               | Avoid securityRolePrivileges                                            | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-getsecurityroleprivilegesinfo](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-getsecurityroleprivilegesinfo) |
  * | web-sdl-no-cookies                      | HTTP cookies are an old client-side storage mechanism with inherent risks and limitations. Use Web Storage, IndexedDB or other modern methods instead. | Do not use HTTP cookies in modern applications                          | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-cookies.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-cookies.md)               |
  * | web-sdl-no-document-domain              | Writes to document.domain property must be reviewed to avoid bypass of same-origin checks. Usage of top level domains such as azurewebsites.net is strictly prohibited. | Do not write to document.domain property                                | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-document-domain.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-document-domain.md) |
  * | web-sdl-no-document-write               | Calls to document.write or document.writeln manipulate DOM directly without any sanitization and should be avoided. Use document.createElement() or similar methods instead. | Do not write to DOM directly using document.write or document.writeln methods | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-document-write.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-document-write.md) |
  * | web-sdl-no-html-method                  | Direct calls to method html() often (e.g. in jQuery framework) manipulate DOM without any sanitization and should be avoided. Use document.createElement() or similar methods instead. | Do not write to DOM directly using jQuery html() method                 | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-html-method.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-html-method.md)       |
  * | web-sdl-no-inner-html                   | Assignments to innerHTML or outerHTML properties manipulate DOM directly without any sanitization and should be avoided. Use document.createElement() or similar methods instead. | Do not write to DOM directly using innerHTML/outerHTML property         | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-inner-html.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-inner-html.md)         |
  * | web-sdl-no-insecure-url                 | Insecure protocols such as HTTP or FTP should be replaced by their encrypted counterparts (HTTPS, FTPS) to avoid sending potentially sensitive data over untrusted networks in plaintext. | Do not use insecure URLs                                                | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-insecure-url.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-insecure-url.md)     |
  * | web-sdl-no-msapp-exec-unsafe            | Calls to MSApp.execUnsafeLocalFunction() bypass script injection validation and should be avoided.    | Do not bypass script injection validation                               | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-msapp-exec-unsafe.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-msapp-exec-unsafe.md) |
  * | web-sdl-no-postmessage-star-origin      | Always provide specific target origin, not * when sending data to other windows using postMessage to avoid data leakage outside of trust boundary. | Do not use * as target origin when sending data to other windows        | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-postmessage-star-origin.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-postmessage-star-origin.md) |
  * | web-sdl-no-winjs-html-unsafe            | Calls to WinJS.Utilities.setInnerHTMLUnsafe() and similar methods do not perform any input validation and should be avoided. Use WinJS.Utilities.setInnerHTML() instead. | Do not set HTML using unsafe methods from WinJS.Utilities               | [https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-winjs-html-unsafe.md](https://github.com/microsoft/eslint-plugin-sdl/blob/main/docs/rules/no-winjs-html-unsafe.md) |
  * | connector-validate-brandcolor           | Ensure brand color is a valid hexadecimal color and should not be white (#ffffff) or default (#007ee5). | Invalid brand color                                                     | [https://go.microsoft.com/fwlink/?linkid=2244386](https://go.microsoft.com/fwlink/?linkid=2244386)                                         |
  * | connector-validate-iconimage            | Ensure a) icon is in PNG format with size below 1MB b) icon's dimensions are 1:1 and fall within the range of 100x100 to 230x230 pixels c) icon matches the brand color with non-transparent, non-white color (#ffffff) and not-default color (#007ee5) background d) logo dimensions are below 70% for image's height & width with consistent background. | Invalid Icon Image Size                                                 | [https://go.microsoft.com/fwlink/?linkid=2244166](https://go.microsoft.com/fwlink/?linkid=2244166)                                         |
  * | connector-validate-swagger-isproperjson | Ensure the openapidefinition is a well formatted JSON.                                                | The openapidefinition.json is not a valid JSON.                         | [https://go.microsoft.com/fwlink/?linkid=2244842](https://go.microsoft.com/fwlink/?linkid=2244842)                                         |
  * | connector-validate-swagger              | Ensure swagger definition complies with OpenAPI 2.0 standard.                                         | Swagger definition does not confirm to the OpenAPI 2.0 standard.        | [https://go.microsoft.com/fwlink/?linkid=2245509](https://go.microsoft.com/fwlink/?linkid=2245509)                                         |
  * | connector-validate-swagger-extended     | Ensure swagger definition complies with OpenAPI 2.0 standard and connectors' extended standard.       | Swagger definition does not confirm to the connector extended standards. | [https://go.microsoft.com/fwlink/?linkid=2245307](https://go.microsoft.com/fwlink/?linkid=2245307)                                         |
  * | connector-validate-title                | Ensure connector title is unique and distinguishable from pre-existing connector title.               | Connector title is not unique.                                          | [https://go.microsoft.com/fwlink/?linkid=2247920](https://go.microsoft.com/fwlink/?linkid=2247920)                                         |
  * | connector-validate-connectionparam-isproperjson | Ensure the connectionparameters is a well formatted JSON.                                             | The connectionparameters.json is not a valid JSON.                      | [https://go.microsoft.com/fwlink/?linkid=2248011](https://go.microsoft.com/fwlink/?linkid=2248011)                                         |
  * | connector-validate-connectionparameters | Ensure the property is updated with appropriate value.                                                | The connectionparameter is not well formed.                             | [https://go.microsoft.com/fwlink/?linkid=2247861](https://go.microsoft.com/fwlink/?linkid=2247861)                                         |
  * | connector-validate-connectionparam-oauth2idp | Ensure the identity provider is from the list of supported oauth2 providers.                          | Invalid OAuth2 Identity Provider                                        | [https://go.microsoft.com/fwlink/?linkid=2248012](https://go.microsoft.com/fwlink/?linkid=2248012)                                         |
  * | meta-license-sales-sdkmessages          | Dynamics 365 SDK messages require users executing these operations to be licensed with any of the Dynamics 365 licenses entitled to this operation. Check product documentation and the Dynamics 365 Licensing Guide for additional information and license entitlements. | Dynamics 365 SDK messages require users executing these operations to be licensed with any of the appropriate Dynamics 365 license. | [https://go.microsoft.com/fwlink/?linkid=2247983](https://go.microsoft.com/fwlink/?linkid=2247983)                                         |
  * | meta-license-sales-entity-operations    | Some operations performed on Dynamics 365 entities require users executing these operations to be licensed with any of the Dynamics 365 licenses entitled to this operation. Check product documentation and the Dynamics 365 Licensing Guide for additional information and license entitlements. | Some operations performed on Dynamics 365 entities require users executing these operations to be licensed with any of the appropriate Dynamics 365 license. | [https://go.microsoft.com/fwlink/?linkid=2248081](https://go.microsoft.com/fwlink/?linkid=2248081)                                         |
  * | meta-license-sales-customcontrols       | Some Dynamics 365 Sales controls require users accessing these controls to be licensed with a Dynamics 365 Sales license. Check product documentation for additional information. | Some Dynamics 365 Sales controls require users accessing these controls to be licensed with a Dynamics 365 Sales license. | [https://go.microsoft.com/fwlink/?linkid=2248449](https://go.microsoft.com/fwlink/?linkid=2248449)                                         |
  * | web-use-appsidepane-api                 | Checks for usage of legacy Xrm.Panel APIs                                                             | Use the AppSidePane APIs                                                | [https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-appsidepane-api](https://learn.microsoft.com/power-apps/maker/data-platform/powerapps-checker/rules/web/use-appsidepane-api) |
  * | meta-license-fieldservice-sdkmessages   | Dynamics 365 SDK messages require users executing these operations to be licensed with any of the Dynamics 365 licenses entitled to this operation. Check product documentation and the Dynamics 365 Licensing Guide for additional information and license entitlements. | Dynamics 365 SDK messages require users executing these operations to be licensed with any of the appropriate Dynamics 365 license. | [https://go.microsoft.com/fwlink/?linkid=2262812](https://go.microsoft.com/fwlink/?linkid=2262812)                                         |
  * | meta-license-fieldservice-entity-operations | Some operations performed on Dynamics 365 entities require users executing these operations to be licensed with any of the Dynamics 365 licenses entitled to this operation. Check product documentation and the Dynamics 365 Licensing Guide for additional information and license entitlements. | Some operations performed on Dynamics 365 entities require users executing these operations to be licensed with any of the appropriate Dynamics 365 license. | [https://go.microsoft.com/fwlink/?linkid=2262812](https://go.microsoft.com/fwlink/?linkid=2262812)                                         |
  * | meta-license-fieldservice-customcontrols | Some Dynamics 365 Field Service controls require users accessing these controls to be licensed with a Dynamics 365 Field Service license. Check product documentation for additional information. | Some Dynamics 365 Field Service controls require users accessing these controls to be licensed with a Dynamics 365 Field Service license. | [https://go.microsoft.com/fwlink/?linkid=2262812](https://go.microsoft.com/fwlink/?linkid=2262812)                                         |
  * | meta-avoid-managed-entity-assets        | Do not add managed entities with all assets to a solution, as this will result in unexpected missing solution dependencies. | Managed entities should not be added to a solution with all assets included. | [https://learn.microsoft.com/troubleshoot/power-platform/power-apps/solutions/missing-dependency-on-solution-import](https://learn.microsoft.com/troubleshoot/power-platform/power-apps/solutions/missing-dependency-on-solution-import) |
  * | meta-include-unmanaged-entity-assets    | Please add unmanaged entities with all assets to a solution, or this will result in sub-component loss due to segmentation. | Unmanaged entities should be added to a solution with all assets included. | [https://learn.microsoft.com/troubleshoot/power-platform/power-apps/solutions/missing-dependency-on-solution-import](https://learn.microsoft.com/troubleshoot/power-platform/power-apps/solutions/missing-dependency-on-solution-import) |
  * | connector-validate-hexadecimalbrandcolor | The brand color is invalid. Update the brand color with a valid hexadecimal color.                    | The brand color is invalid. Update the brand color with a valid hexadecimal color. | [https://go.microsoft.com/fwlink/?linkid=2244386](https://go.microsoft.com/fwlink/?linkid=2244386)                                         |
  * 
  * ## More Information
  * [Solution Checker enforcement](https://learn.microsoft.com/power-platform/admin/managed-environment-solution-checker).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#solution_checker_rule_overrides PowerplatformManagedEnvironment#solution_checker_rule_overrides}
  */
  readonly solutionCheckerRuleOverrides?: string[];
  /**
  * Send emails only when a solution is blocked. If 'False', you'll also get emails when there are warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#suppress_validation_emails PowerplatformManagedEnvironment#suppress_validation_emails}
  */
  readonly suppressValidationEmails: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#timeouts PowerplatformManagedEnvironment#timeouts}
  */
  readonly timeouts?: PowerplatformManagedEnvironmentTimeouts;
}
export interface PowerplatformManagedEnvironmentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#create PowerplatformManagedEnvironment#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#delete PowerplatformManagedEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#read PowerplatformManagedEnvironment#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#update PowerplatformManagedEnvironment#update}
  */
  readonly update?: string;
}

export function powerplatformManagedEnvironmentTimeoutsToTerraform(struct?: PowerplatformManagedEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function powerplatformManagedEnvironmentTimeoutsToHclTerraform(struct?: PowerplatformManagedEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformManagedEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformManagedEnvironmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformManagedEnvironmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment powerplatform_managed_environment}
*/
export class PowerplatformManagedEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_managed_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerplatformManagedEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerplatformManagedEnvironment to import
  * @param importFromId The id of the existing PowerplatformManagedEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerplatformManagedEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_managed_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/resources/powerplatform_managed_environment powerplatform_managed_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerplatformManagedEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: PowerplatformManagedEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_managed_environment',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._isGroupSharingDisabled = config.isGroupSharingDisabled;
    this._isUsageInsightsDisabled = config.isUsageInsightsDisabled;
    this._limitSharingMode = config.limitSharingMode;
    this._makerOnboardingMarkdown = config.makerOnboardingMarkdown;
    this._makerOnboardingUrl = config.makerOnboardingUrl;
    this._maxLimitUserSharing = config.maxLimitUserSharing;
    this._solutionCheckerMode = config.solutionCheckerMode;
    this._solutionCheckerRuleOverrides = config.solutionCheckerRuleOverrides;
    this._suppressValidationEmails = config.suppressValidationEmails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_group_sharing_disabled - computed: false, optional: false, required: true
  private _isGroupSharingDisabled?: boolean | cdktf.IResolvable; 
  public get isGroupSharingDisabled() {
    return this.getBooleanAttribute('is_group_sharing_disabled');
  }
  public set isGroupSharingDisabled(value: boolean | cdktf.IResolvable) {
    this._isGroupSharingDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isGroupSharingDisabledInput() {
    return this._isGroupSharingDisabled;
  }

  // is_usage_insights_disabled - computed: false, optional: false, required: true
  private _isUsageInsightsDisabled?: boolean | cdktf.IResolvable; 
  public get isUsageInsightsDisabled() {
    return this.getBooleanAttribute('is_usage_insights_disabled');
  }
  public set isUsageInsightsDisabled(value: boolean | cdktf.IResolvable) {
    this._isUsageInsightsDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isUsageInsightsDisabledInput() {
    return this._isUsageInsightsDisabled;
  }

  // limit_sharing_mode - computed: false, optional: false, required: true
  private _limitSharingMode?: string; 
  public get limitSharingMode() {
    return this.getStringAttribute('limit_sharing_mode');
  }
  public set limitSharingMode(value: string) {
    this._limitSharingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitSharingModeInput() {
    return this._limitSharingMode;
  }

  // maker_onboarding_markdown - computed: false, optional: false, required: true
  private _makerOnboardingMarkdown?: string; 
  public get makerOnboardingMarkdown() {
    return this.getStringAttribute('maker_onboarding_markdown');
  }
  public set makerOnboardingMarkdown(value: string) {
    this._makerOnboardingMarkdown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get makerOnboardingMarkdownInput() {
    return this._makerOnboardingMarkdown;
  }

  // maker_onboarding_url - computed: false, optional: false, required: true
  private _makerOnboardingUrl?: string; 
  public get makerOnboardingUrl() {
    return this.getStringAttribute('maker_onboarding_url');
  }
  public set makerOnboardingUrl(value: string) {
    this._makerOnboardingUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get makerOnboardingUrlInput() {
    return this._makerOnboardingUrl;
  }

  // max_limit_user_sharing - computed: false, optional: false, required: true
  private _maxLimitUserSharing?: number; 
  public get maxLimitUserSharing() {
    return this.getNumberAttribute('max_limit_user_sharing');
  }
  public set maxLimitUserSharing(value: number) {
    this._maxLimitUserSharing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLimitUserSharingInput() {
    return this._maxLimitUserSharing;
  }

  // protection_level - computed: true, optional: false, required: false
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }

  // solution_checker_mode - computed: false, optional: false, required: true
  private _solutionCheckerMode?: string; 
  public get solutionCheckerMode() {
    return this.getStringAttribute('solution_checker_mode');
  }
  public set solutionCheckerMode(value: string) {
    this._solutionCheckerMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionCheckerModeInput() {
    return this._solutionCheckerMode;
  }

  // solution_checker_rule_overrides - computed: true, optional: true, required: false
  private _solutionCheckerRuleOverrides?: string[]; 
  public get solutionCheckerRuleOverrides() {
    return cdktf.Fn.tolist(this.getListAttribute('solution_checker_rule_overrides'));
  }
  public set solutionCheckerRuleOverrides(value: string[]) {
    this._solutionCheckerRuleOverrides = value;
  }
  public resetSolutionCheckerRuleOverrides() {
    this._solutionCheckerRuleOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionCheckerRuleOverridesInput() {
    return this._solutionCheckerRuleOverrides;
  }

  // suppress_validation_emails - computed: false, optional: false, required: true
  private _suppressValidationEmails?: boolean | cdktf.IResolvable; 
  public get suppressValidationEmails() {
    return this.getBooleanAttribute('suppress_validation_emails');
  }
  public set suppressValidationEmails(value: boolean | cdktf.IResolvable) {
    this._suppressValidationEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressValidationEmailsInput() {
    return this._suppressValidationEmails;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PowerplatformManagedEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PowerplatformManagedEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      is_group_sharing_disabled: cdktf.booleanToTerraform(this._isGroupSharingDisabled),
      is_usage_insights_disabled: cdktf.booleanToTerraform(this._isUsageInsightsDisabled),
      limit_sharing_mode: cdktf.stringToTerraform(this._limitSharingMode),
      maker_onboarding_markdown: cdktf.stringToTerraform(this._makerOnboardingMarkdown),
      maker_onboarding_url: cdktf.stringToTerraform(this._makerOnboardingUrl),
      max_limit_user_sharing: cdktf.numberToTerraform(this._maxLimitUserSharing),
      solution_checker_mode: cdktf.stringToTerraform(this._solutionCheckerMode),
      solution_checker_rule_overrides: cdktf.listMapper(cdktf.stringToTerraform, false)(this._solutionCheckerRuleOverrides),
      suppress_validation_emails: cdktf.booleanToTerraform(this._suppressValidationEmails),
      timeouts: powerplatformManagedEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_group_sharing_disabled: {
        value: cdktf.booleanToHclTerraform(this._isGroupSharingDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_usage_insights_disabled: {
        value: cdktf.booleanToHclTerraform(this._isUsageInsightsDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit_sharing_mode: {
        value: cdktf.stringToHclTerraform(this._limitSharingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maker_onboarding_markdown: {
        value: cdktf.stringToHclTerraform(this._makerOnboardingMarkdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maker_onboarding_url: {
        value: cdktf.stringToHclTerraform(this._makerOnboardingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_limit_user_sharing: {
        value: cdktf.numberToHclTerraform(this._maxLimitUserSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      solution_checker_mode: {
        value: cdktf.stringToHclTerraform(this._solutionCheckerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      solution_checker_rule_overrides: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._solutionCheckerRuleOverrides),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      suppress_validation_emails: {
        value: cdktf.booleanToHclTerraform(this._suppressValidationEmails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: powerplatformManagedEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformManagedEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
