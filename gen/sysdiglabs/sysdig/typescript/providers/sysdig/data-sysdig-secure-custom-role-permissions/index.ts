// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_custom_role_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSysdigSecureCustomRolePermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_custom_role_permissions#id DataSysdigSecureCustomRolePermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_custom_role_permissions#requested_permissions DataSysdigSecureCustomRolePermissions#requested_permissions}
  */
  readonly requestedPermissions: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_custom_role_permissions#timeouts DataSysdigSecureCustomRolePermissions#timeouts}
  */
  readonly timeouts?: DataSysdigSecureCustomRolePermissionsTimeouts;
}
export interface DataSysdigSecureCustomRolePermissionsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_custom_role_permissions#read DataSysdigSecureCustomRolePermissions#read}
  */
  readonly read?: string;
}

export function dataSysdigSecureCustomRolePermissionsTimeoutsToTerraform(struct?: DataSysdigSecureCustomRolePermissionsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataSysdigSecureCustomRolePermissionsTimeoutsToHclTerraform(struct?: DataSysdigSecureCustomRolePermissionsTimeouts | cdktf.IResolvable): any {
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

export class DataSysdigSecureCustomRolePermissionsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSysdigSecureCustomRolePermissionsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSysdigSecureCustomRolePermissionsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_custom_role_permissions sysdig_secure_custom_role_permissions}
*/
export class DataSysdigSecureCustomRolePermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_custom_role_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSysdigSecureCustomRolePermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSysdigSecureCustomRolePermissions to import
  * @param importFromId The id of the existing DataSysdigSecureCustomRolePermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_custom_role_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSysdigSecureCustomRolePermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_custom_role_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/data-sources/secure_custom_role_permissions sysdig_secure_custom_role_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSysdigSecureCustomRolePermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSysdigSecureCustomRolePermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_custom_role_permissions',
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
    this._id = config.id;
    this._requestedPermissions = config.requestedPermissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enriched_permissions - computed: true, optional: false, required: false
  public get enrichedPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('enriched_permissions'));
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

  // requested_permissions - computed: false, optional: false, required: true
  private _requestedPermissions?: string[]; 
  public get requestedPermissions() {
    return this.getListAttribute('requested_permissions');
  }
  public set requestedPermissions(value: string[]) {
    this._requestedPermissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedPermissionsInput() {
    return this._requestedPermissions;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSysdigSecureCustomRolePermissionsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSysdigSecureCustomRolePermissionsTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      requested_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestedPermissions),
      timeouts: dataSysdigSecureCustomRolePermissionsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requested_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestedPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: dataSysdigSecureCustomRolePermissionsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSysdigSecureCustomRolePermissionsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
