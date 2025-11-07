// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementOracleCloudDataCenterServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * key-authentication Uses the Service Account private key file to authenticate. vm-instance-authentication Uses VM Instance to authenticate. This option requires the Security Management Server deployed in Oracle Cloud, and running in a dynamic group with the required permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#authentication_method ManagementOracleCloudDataCenterServer#authentication_method}
  */
  readonly authenticationMethod: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#color ManagementOracleCloudDataCenterServer#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#comments ManagementOracleCloudDataCenterServer#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#id ManagementOracleCloudDataCenterServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#ignore_errors ManagementOracleCloudDataCenterServer#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings. By Setting this parameter to 'true' test connection failure will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#ignore_warnings ManagementOracleCloudDataCenterServer#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * An Oracle Cloud region for where to create scanner. Required for authentication-method: key-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#key_region ManagementOracleCloudDataCenterServer#key_region}
  */
  readonly keyRegion: string;
  /**
  * An Oracle Cloud tenancy id where the key was created. Required for authentication-method: key-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#key_tenant ManagementOracleCloudDataCenterServer#key_tenant}
  */
  readonly keyTenant: string;
  /**
  * An Oracle Cloud user id associated with key. Required for authentication-method: key-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#key_user ManagementOracleCloudDataCenterServer#key_user}
  */
  readonly keyUser: string;
  /**
  * Object name. Must be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#name ManagementOracleCloudDataCenterServer#name}
  */
  readonly name: string;
  /**
  *  An Oracle Cloud API key PEM file, encoded in base64. Required for authentication-method: key-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#private_key ManagementOracleCloudDataCenterServer#private_key}
  */
  readonly privateKey: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#tags ManagementOracleCloudDataCenterServer#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server checkpoint_management_oracle_cloud_data_center_server}
*/
export class ManagementOracleCloudDataCenterServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_oracle_cloud_data_center_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementOracleCloudDataCenterServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementOracleCloudDataCenterServer to import
  * @param importFromId The id of the existing ManagementOracleCloudDataCenterServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementOracleCloudDataCenterServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_oracle_cloud_data_center_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_oracle_cloud_data_center_server checkpoint_management_oracle_cloud_data_center_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementOracleCloudDataCenterServerConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementOracleCloudDataCenterServerConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_oracle_cloud_data_center_server',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMethod = config.authenticationMethod;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._keyRegion = config.keyRegion;
    this._keyTenant = config.keyTenant;
    this._keyUser = config.keyUser;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // automatic_refresh - computed: true, optional: false, required: false
  public get automaticRefresh() {
    return this.getBooleanAttribute('automatic_refresh');
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // data_center_type - computed: true, optional: false, required: false
  public get dataCenterType() {
    return this.getStringAttribute('data_center_type');
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // key_region - computed: false, optional: false, required: true
  private _keyRegion?: string; 
  public get keyRegion() {
    return this.getStringAttribute('key_region');
  }
  public set keyRegion(value: string) {
    this._keyRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRegionInput() {
    return this._keyRegion;
  }

  // key_tenant - computed: false, optional: false, required: true
  private _keyTenant?: string; 
  public get keyTenant() {
    return this.getStringAttribute('key_tenant');
  }
  public set keyTenant(value: string) {
    this._keyTenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTenantInput() {
    return this._keyTenant;
  }

  // key_user - computed: false, optional: false, required: true
  private _keyUser?: string; 
  public get keyUser() {
    return this.getStringAttribute('key_user');
  }
  public set keyUser(value: string) {
    this._keyUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUserInput() {
    return this._keyUser;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      key_region: cdktf.stringToTerraform(this._keyRegion),
      key_tenant: cdktf.stringToTerraform(this._keyTenant),
      key_user: cdktf.stringToTerraform(this._keyUser),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_region: {
        value: cdktf.stringToHclTerraform(this._keyRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_tenant: {
        value: cdktf.stringToHclTerraform(this._keyTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_user: {
        value: cdktf.stringToHclTerraform(this._keyUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
