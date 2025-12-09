// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationOciTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#credentials IntegrationOciTenant#credentials}
  */
  readonly credentials: IntegrationOciTenantCredentials;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#name IntegrationOciTenant#name}
  */
  readonly name?: string;
  /**
  * OCI region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#region IntegrationOciTenant#region}
  */
  readonly region: string;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#space_id IntegrationOciTenant#space_id}
  */
  readonly spaceId?: string;
  /**
  * OCI tenancy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#tenancy IntegrationOciTenant#tenancy}
  */
  readonly tenancy: string;
  /**
  * OCI user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#user IntegrationOciTenant#user}
  */
  readonly user: string;
}
export interface IntegrationOciTenantCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#fingerprint IntegrationOciTenant#fingerprint}
  */
  readonly fingerprint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#private_key IntegrationOciTenant#private_key}
  */
  readonly privateKey: string;
}

export function integrationOciTenantCredentialsToTerraform(struct?: IntegrationOciTenantCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function integrationOciTenantCredentialsToHclTerraform(struct?: IntegrationOciTenantCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationOciTenantCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationOciTenantCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationOciTenantCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprint = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fingerprint = value.fingerprint;
      this._privateKey = value.privateKey;
    }
  }

  // fingerprint - computed: false, optional: false, required: true
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant mondoo_integration_oci_tenant}
*/
export class IntegrationOciTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_oci_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationOciTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationOciTenant to import
  * @param importFromId The id of the existing IntegrationOciTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationOciTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_oci_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_oci_tenant mondoo_integration_oci_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationOciTenantConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationOciTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_oci_tenant',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.0',
        providerVersionConstraint: '0.35.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentials.internalValue = config.credentials;
    this._name = config.name;
    this._region = config.region;
    this._spaceId = config.spaceId;
    this._tenancy = config.tenancy;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationOciTenantCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationOciTenantCredentials) {
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // tenancy - computed: false, optional: false, required: true
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: integrationOciTenantCredentialsToTerraform(this._credentials.internalValue),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenancy: cdktf.stringToTerraform(this._tenancy),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: integrationOciTenantCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationOciTenantCredentials",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      tenancy: {
        value: cdktf.stringToHclTerraform(this._tenancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
