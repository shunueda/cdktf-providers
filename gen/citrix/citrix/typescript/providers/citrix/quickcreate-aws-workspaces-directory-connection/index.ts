// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuickcreateAwsWorkspacesDirectoryConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the account the directory connection is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#account QuickcreateAwsWorkspacesDirectoryConnection#account}
  */
  readonly account: string;
  /**
  * Default OU for VDAs in the directory connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#default_ou QuickcreateAwsWorkspacesDirectoryConnection#default_ou}
  */
  readonly defaultOu: string;
  /**
  * ID of the AWS directory the directory connection is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#directory QuickcreateAwsWorkspacesDirectoryConnection#directory}
  */
  readonly directory: string;
  /**
  * Name of the directory connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#name QuickcreateAwsWorkspacesDirectoryConnection#name}
  */
  readonly name: string;
  /**
  * ID of the resource location the directory connection is associated with. Only one of `resource_location` and `zone` attributes can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#resource_location QuickcreateAwsWorkspacesDirectoryConnection#resource_location}
  */
  readonly resourceLocation?: string;
  /**
  * ID of the security group the directory connection is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#security_group QuickcreateAwsWorkspacesDirectoryConnection#security_group}
  */
  readonly securityGroup: string;
  /**
  * IDs of the subnets the directory connection is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#subnets QuickcreateAwsWorkspacesDirectoryConnection#subnets}
  */
  readonly subnets: string[];
  /**
  * Tenancy of the directory connection. Possible values are `SHARED` and `DEDICATED`. Defaults to `DEDICATED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#tenancy QuickcreateAwsWorkspacesDirectoryConnection#tenancy}
  */
  readonly tenancy?: string;
  /**
  * Enable users to be local administrators. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#user_enabled_as_local_administrator QuickcreateAwsWorkspacesDirectoryConnection#user_enabled_as_local_administrator}
  */
  readonly userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable;
  /**
  * ID of the zone the directory connection is associated with. Only one of `zone` and `resource_location` attributes can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#zone QuickcreateAwsWorkspacesDirectoryConnection#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection citrix_quickcreate_aws_workspaces_directory_connection}
*/
export class QuickcreateAwsWorkspacesDirectoryConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_quickcreate_aws_workspaces_directory_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuickcreateAwsWorkspacesDirectoryConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuickcreateAwsWorkspacesDirectoryConnection to import
  * @param importFromId The id of the existing QuickcreateAwsWorkspacesDirectoryConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuickcreateAwsWorkspacesDirectoryConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_quickcreate_aws_workspaces_directory_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickcreate_aws_workspaces_directory_connection citrix_quickcreate_aws_workspaces_directory_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuickcreateAwsWorkspacesDirectoryConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: QuickcreateAwsWorkspacesDirectoryConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_quickcreate_aws_workspaces_directory_connection',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._defaultOu = config.defaultOu;
    this._directory = config.directory;
    this._name = config.name;
    this._resourceLocation = config.resourceLocation;
    this._securityGroup = config.securityGroup;
    this._subnets = config.subnets;
    this._tenancy = config.tenancy;
    this._userEnabledAsLocalAdministrator = config.userEnabledAsLocalAdministrator;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // default_ou - computed: false, optional: false, required: true
  private _defaultOu?: string; 
  public get defaultOu() {
    return this.getStringAttribute('default_ou');
  }
  public set defaultOu(value: string) {
    this._defaultOu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOuInput() {
    return this._defaultOu;
  }

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_location - computed: false, optional: true, required: false
  private _resourceLocation?: string; 
  public get resourceLocation() {
    return this.getStringAttribute('resource_location');
  }
  public set resourceLocation(value: string) {
    this._resourceLocation = value;
  }
  public resetResourceLocation() {
    this._resourceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLocationInput() {
    return this._resourceLocation;
  }

  // security_group - computed: false, optional: false, required: true
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // user_enabled_as_local_administrator - computed: true, optional: true, required: false
  private _userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable; 
  public get userEnabledAsLocalAdministrator() {
    return this.getBooleanAttribute('user_enabled_as_local_administrator');
  }
  public set userEnabledAsLocalAdministrator(value: boolean | cdktf.IResolvable) {
    this._userEnabledAsLocalAdministrator = value;
  }
  public resetUserEnabledAsLocalAdministrator() {
    this._userEnabledAsLocalAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEnabledAsLocalAdministratorInput() {
    return this._userEnabledAsLocalAdministrator;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      default_ou: cdktf.stringToTerraform(this._defaultOu),
      directory: cdktf.stringToTerraform(this._directory),
      name: cdktf.stringToTerraform(this._name),
      resource_location: cdktf.stringToTerraform(this._resourceLocation),
      security_group: cdktf.stringToTerraform(this._securityGroup),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      tenancy: cdktf.stringToTerraform(this._tenancy),
      user_enabled_as_local_administrator: cdktf.booleanToTerraform(this._userEnabledAsLocalAdministrator),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ou: {
        value: cdktf.stringToHclTerraform(this._defaultOu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
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
      resource_location: {
        value: cdktf.stringToHclTerraform(this._resourceLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group: {
        value: cdktf.stringToHclTerraform(this._securityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenancy: {
        value: cdktf.stringToHclTerraform(this._tenancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_enabled_as_local_administrator: {
        value: cdktf.booleanToHclTerraform(this._userEnabledAsLocalAdministrator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
