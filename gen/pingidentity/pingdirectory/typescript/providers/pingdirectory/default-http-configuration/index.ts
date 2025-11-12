// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultHttpConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to expose servlet information in the error page response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_configuration#include_servlet_information_in_error_pages DefaultHttpConfiguration#include_servlet_information_in_error_pages}
  */
  readonly includeServletInformationInErrorPages?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether exceptions thrown by servlet or web application extensions will be included in the resulting error page response. Stack traces can be helpful in diagnosing application errors, but in production they may reveal information that might be useful to a malicious attacker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_configuration#include_stack_traces_in_error_pages DefaultHttpConfiguration#include_stack_traces_in_error_pages}
  */
  readonly includeStackTracesInErrorPages?: boolean | cdktf.IResolvable;
}
export interface DefaultHttpConfigurationRequiredActions {
}

export function defaultHttpConfigurationRequiredActionsToTerraform(struct?: DefaultHttpConfigurationRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultHttpConfigurationRequiredActionsToHclTerraform(struct?: DefaultHttpConfigurationRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultHttpConfigurationRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultHttpConfigurationRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultHttpConfigurationRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultHttpConfigurationRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultHttpConfigurationRequiredActionsOutputReference {
    return new DefaultHttpConfigurationRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_configuration pingdirectory_default_http_configuration}
*/
export class DefaultHttpConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_http_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultHttpConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultHttpConfiguration to import
  * @param importFromId The id of the existing DefaultHttpConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultHttpConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_http_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_configuration pingdirectory_default_http_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultHttpConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultHttpConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_http_configuration',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._includeServletInformationInErrorPages = config.includeServletInformationInErrorPages;
    this._includeStackTracesInErrorPages = config.includeStackTracesInErrorPages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_servlet_information_in_error_pages - computed: true, optional: true, required: false
  private _includeServletInformationInErrorPages?: boolean | cdktf.IResolvable; 
  public get includeServletInformationInErrorPages() {
    return this.getBooleanAttribute('include_servlet_information_in_error_pages');
  }
  public set includeServletInformationInErrorPages(value: boolean | cdktf.IResolvable) {
    this._includeServletInformationInErrorPages = value;
  }
  public resetIncludeServletInformationInErrorPages() {
    this._includeServletInformationInErrorPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeServletInformationInErrorPagesInput() {
    return this._includeServletInformationInErrorPages;
  }

  // include_stack_traces_in_error_pages - computed: true, optional: true, required: false
  private _includeStackTracesInErrorPages?: boolean | cdktf.IResolvable; 
  public get includeStackTracesInErrorPages() {
    return this.getBooleanAttribute('include_stack_traces_in_error_pages');
  }
  public set includeStackTracesInErrorPages(value: boolean | cdktf.IResolvable) {
    this._includeStackTracesInErrorPages = value;
  }
  public resetIncludeStackTracesInErrorPages() {
    this._includeStackTracesInErrorPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeStackTracesInErrorPagesInput() {
    return this._includeStackTracesInErrorPages;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultHttpConfigurationRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_servlet_information_in_error_pages: cdktf.booleanToTerraform(this._includeServletInformationInErrorPages),
      include_stack_traces_in_error_pages: cdktf.booleanToTerraform(this._includeStackTracesInErrorPages),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_servlet_information_in_error_pages: {
        value: cdktf.booleanToHclTerraform(this._includeServletInformationInErrorPages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_stack_traces_in_error_pages: {
        value: cdktf.booleanToHclTerraform(this._includeStackTracesInErrorPages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
