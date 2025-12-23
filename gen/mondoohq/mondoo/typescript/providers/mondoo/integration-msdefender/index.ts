// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationMsdefenderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#client_id IntegrationMsdefender#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#credentials IntegrationMsdefender#credentials}
  */
  readonly credentials: IntegrationMsdefenderCredentials;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#name IntegrationMsdefender#name}
  */
  readonly name: string;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#space_id IntegrationMsdefender#space_id}
  */
  readonly spaceId?: string;
  /**
  * List of Azure subscriptions from which to import Defender data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#subscription_allow_list IntegrationMsdefender#subscription_allow_list}
  */
  readonly subscriptionAllowList?: string[];
  /**
  * List of Azure subscriptions to exclude from imports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#subscription_deny_list IntegrationMsdefender#subscription_deny_list}
  */
  readonly subscriptionDenyList?: string[];
  /**
  * Azure tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#tenant_id IntegrationMsdefender#tenant_id}
  */
  readonly tenantId: string;
}
export interface IntegrationMsdefenderCredentials {
  /**
  * PEM file for Azure integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#pem_file IntegrationMsdefender#pem_file}
  */
  readonly pemFile: string;
}

export function integrationMsdefenderCredentialsToTerraform(struct?: IntegrationMsdefenderCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pem_file: cdktf.stringToTerraform(struct!.pemFile),
  }
}


export function integrationMsdefenderCredentialsToHclTerraform(struct?: IntegrationMsdefenderCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pem_file: {
      value: cdktf.stringToHclTerraform(struct!.pemFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMsdefenderCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationMsdefenderCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemFile = this._pemFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMsdefenderCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemFile = value.pemFile;
    }
  }

  // pem_file - computed: false, optional: false, required: true
  private _pemFile?: string; 
  public get pemFile() {
    return this.getStringAttribute('pem_file');
  }
  public set pemFile(value: string) {
    this._pemFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemFileInput() {
    return this._pemFile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender mondoo_integration_msdefender}
*/
export class IntegrationMsdefender extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_msdefender";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationMsdefender resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationMsdefender to import
  * @param importFromId The id of the existing IntegrationMsdefender that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationMsdefender to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_msdefender", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/integration_msdefender mondoo_integration_msdefender} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationMsdefenderConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationMsdefenderConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_msdefender',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.3',
        providerVersionConstraint: '0.35.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._credentials.internalValue = config.credentials;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._subscriptionAllowList = config.subscriptionAllowList;
    this._subscriptionDenyList = config.subscriptionDenyList;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationMsdefenderCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationMsdefenderCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // subscription_allow_list - computed: false, optional: true, required: false
  private _subscriptionAllowList?: string[]; 
  public get subscriptionAllowList() {
    return this.getListAttribute('subscription_allow_list');
  }
  public set subscriptionAllowList(value: string[]) {
    this._subscriptionAllowList = value;
  }
  public resetSubscriptionAllowList() {
    this._subscriptionAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionAllowListInput() {
    return this._subscriptionAllowList;
  }

  // subscription_deny_list - computed: false, optional: true, required: false
  private _subscriptionDenyList?: string[]; 
  public get subscriptionDenyList() {
    return this.getListAttribute('subscription_deny_list');
  }
  public set subscriptionDenyList(value: string[]) {
    this._subscriptionDenyList = value;
  }
  public resetSubscriptionDenyList() {
    this._subscriptionDenyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionDenyListInput() {
    return this._subscriptionDenyList;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      credentials: integrationMsdefenderCredentialsToTerraform(this._credentials.internalValue),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      subscription_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptionAllowList),
      subscription_deny_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptionDenyList),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: integrationMsdefenderCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationMsdefenderCredentials",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptionAllowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subscription_deny_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptionDenyList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
