// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotIotDomainConfigureDataAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#db_allow_listed_identity_group_names IotIotDomainConfigureDataAccess#db_allow_listed_identity_group_names}
  */
  readonly dbAllowListedIdentityGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#db_allowed_identity_domain_host IotIotDomainConfigureDataAccess#db_allowed_identity_domain_host}
  */
  readonly dbAllowedIdentityDomainHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#db_workspace_admin_initial_password IotIotDomainConfigureDataAccess#db_workspace_admin_initial_password}
  */
  readonly dbWorkspaceAdminInitialPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#id IotIotDomainConfigureDataAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#iot_domain_id IotIotDomainConfigureDataAccess#iot_domain_id}
  */
  readonly iotDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#type IotIotDomainConfigureDataAccess#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#timeouts IotIotDomainConfigureDataAccess#timeouts}
  */
  readonly timeouts?: IotIotDomainConfigureDataAccessTimeouts;
}
export interface IotIotDomainConfigureDataAccessTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#create IotIotDomainConfigureDataAccess#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#delete IotIotDomainConfigureDataAccess#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#update IotIotDomainConfigureDataAccess#update}
  */
  readonly update?: string;
}

export function iotIotDomainConfigureDataAccessTimeoutsToTerraform(struct?: IotIotDomainConfigureDataAccessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function iotIotDomainConfigureDataAccessTimeoutsToHclTerraform(struct?: IotIotDomainConfigureDataAccessTimeouts | cdktf.IResolvable): any {
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

export class IotIotDomainConfigureDataAccessTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotIotDomainConfigureDataAccessTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotIotDomainConfigureDataAccessTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access oci_iot_iot_domain_configure_data_access}
*/
export class IotIotDomainConfigureDataAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_iot_domain_configure_data_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotIotDomainConfigureDataAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotIotDomainConfigureDataAccess to import
  * @param importFromId The id of the existing IotIotDomainConfigureDataAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotIotDomainConfigureDataAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_iot_domain_configure_data_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/iot_iot_domain_configure_data_access oci_iot_iot_domain_configure_data_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotIotDomainConfigureDataAccessConfig
  */
  public constructor(scope: Construct, id: string, config: IotIotDomainConfigureDataAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_iot_domain_configure_data_access',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbAllowListedIdentityGroupNames = config.dbAllowListedIdentityGroupNames;
    this._dbAllowedIdentityDomainHost = config.dbAllowedIdentityDomainHost;
    this._dbWorkspaceAdminInitialPassword = config.dbWorkspaceAdminInitialPassword;
    this._id = config.id;
    this._iotDomainId = config.iotDomainId;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_allow_listed_identity_group_names - computed: false, optional: true, required: false
  private _dbAllowListedIdentityGroupNames?: string[]; 
  public get dbAllowListedIdentityGroupNames() {
    return this.getListAttribute('db_allow_listed_identity_group_names');
  }
  public set dbAllowListedIdentityGroupNames(value: string[]) {
    this._dbAllowListedIdentityGroupNames = value;
  }
  public resetDbAllowListedIdentityGroupNames() {
    this._dbAllowListedIdentityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAllowListedIdentityGroupNamesInput() {
    return this._dbAllowListedIdentityGroupNames;
  }

  // db_allowed_identity_domain_host - computed: false, optional: true, required: false
  private _dbAllowedIdentityDomainHost?: string; 
  public get dbAllowedIdentityDomainHost() {
    return this.getStringAttribute('db_allowed_identity_domain_host');
  }
  public set dbAllowedIdentityDomainHost(value: string) {
    this._dbAllowedIdentityDomainHost = value;
  }
  public resetDbAllowedIdentityDomainHost() {
    this._dbAllowedIdentityDomainHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAllowedIdentityDomainHostInput() {
    return this._dbAllowedIdentityDomainHost;
  }

  // db_workspace_admin_initial_password - computed: false, optional: true, required: false
  private _dbWorkspaceAdminInitialPassword?: string; 
  public get dbWorkspaceAdminInitialPassword() {
    return this.getStringAttribute('db_workspace_admin_initial_password');
  }
  public set dbWorkspaceAdminInitialPassword(value: string) {
    this._dbWorkspaceAdminInitialPassword = value;
  }
  public resetDbWorkspaceAdminInitialPassword() {
    this._dbWorkspaceAdminInitialPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkspaceAdminInitialPasswordInput() {
    return this._dbWorkspaceAdminInitialPassword;
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

  // iot_domain_id - computed: false, optional: false, required: true
  private _iotDomainId?: string; 
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
  }
  public set iotDomainId(value: string) {
    this._iotDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDomainIdInput() {
    return this._iotDomainId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotIotDomainConfigureDataAccessTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotIotDomainConfigureDataAccessTimeouts) {
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
      db_allow_listed_identity_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbAllowListedIdentityGroupNames),
      db_allowed_identity_domain_host: cdktf.stringToTerraform(this._dbAllowedIdentityDomainHost),
      db_workspace_admin_initial_password: cdktf.stringToTerraform(this._dbWorkspaceAdminInitialPassword),
      id: cdktf.stringToTerraform(this._id),
      iot_domain_id: cdktf.stringToTerraform(this._iotDomainId),
      type: cdktf.stringToTerraform(this._type),
      timeouts: iotIotDomainConfigureDataAccessTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_allow_listed_identity_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbAllowListedIdentityGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      db_allowed_identity_domain_host: {
        value: cdktf.stringToHclTerraform(this._dbAllowedIdentityDomainHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_workspace_admin_initial_password: {
        value: cdktf.stringToHclTerraform(this._dbWorkspaceAdminInitialPassword),
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
      iot_domain_id: {
        value: cdktf.stringToHclTerraform(this._iotDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iotIotDomainConfigureDataAccessTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotIotDomainConfigureDataAccessTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
