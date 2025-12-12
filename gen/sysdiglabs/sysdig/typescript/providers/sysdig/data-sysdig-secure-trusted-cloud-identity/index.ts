// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_trusted_cloud_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSysdigSecureTrustedCloudIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_trusted_cloud_identity#cloud_provider DataSysdigSecureTrustedCloudIdentity#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_trusted_cloud_identity#id DataSysdigSecureTrustedCloudIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_trusted_cloud_identity#timeouts DataSysdigSecureTrustedCloudIdentity#timeouts}
  */
  readonly timeouts?: DataSysdigSecureTrustedCloudIdentityTimeouts;
}
export interface DataSysdigSecureTrustedCloudIdentityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_trusted_cloud_identity#read DataSysdigSecureTrustedCloudIdentity#read}
  */
  readonly read?: string;
}

export function dataSysdigSecureTrustedCloudIdentityTimeoutsToTerraform(struct?: DataSysdigSecureTrustedCloudIdentityTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataSysdigSecureTrustedCloudIdentityTimeoutsToHclTerraform(struct?: DataSysdigSecureTrustedCloudIdentityTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSysdigSecureTrustedCloudIdentityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSysdigSecureTrustedCloudIdentityTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSysdigSecureTrustedCloudIdentityTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_trusted_cloud_identity sysdig_secure_trusted_cloud_identity}
*/
export class DataSysdigSecureTrustedCloudIdentity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_trusted_cloud_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSysdigSecureTrustedCloudIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSysdigSecureTrustedCloudIdentity to import
  * @param importFromId The id of the existing DataSysdigSecureTrustedCloudIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_trusted_cloud_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSysdigSecureTrustedCloudIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_trusted_cloud_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_trusted_cloud_identity sysdig_secure_trusted_cloud_identity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSysdigSecureTrustedCloudIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: DataSysdigSecureTrustedCloudIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_trusted_cloud_identity',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.3.1',
        providerVersionConstraint: '3.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_gov_account_id - computed: true, optional: false, required: false
  public get awsGovAccountId() {
    return this.getStringAttribute('aws_gov_account_id');
  }

  // aws_gov_role_name - computed: true, optional: false, required: false
  public get awsGovRoleName() {
    return this.getStringAttribute('aws_gov_role_name');
  }

  // aws_role_name - computed: true, optional: false, required: false
  public get awsRoleName() {
    return this.getStringAttribute('aws_role_name');
  }

  // azure_service_principal_id - computed: true, optional: false, required: false
  public get azureServicePrincipalId() {
    return this.getStringAttribute('azure_service_principal_id');
  }

  // azure_tenant_id - computed: true, optional: false, required: false
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // gov_identity - computed: true, optional: false, required: false
  public get govIdentity() {
    return this.getStringAttribute('gov_identity');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSysdigSecureTrustedCloudIdentityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSysdigSecureTrustedCloudIdentityTimeouts) {
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
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataSysdigSecureTrustedCloudIdentityTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSysdigSecureTrustedCloudIdentityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSysdigSecureTrustedCloudIdentityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
