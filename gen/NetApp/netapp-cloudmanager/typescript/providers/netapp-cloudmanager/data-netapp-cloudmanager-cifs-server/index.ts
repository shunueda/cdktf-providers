// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappCloudmanagerCifsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#client_id DataNetappCloudmanagerCifsServer#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#dns_domain DataNetappCloudmanagerCifsServer#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#domain DataNetappCloudmanagerCifsServer#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#id DataNetappCloudmanagerCifsServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#ip_addresses DataNetappCloudmanagerCifsServer#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#is_workgroup DataNetappCloudmanagerCifsServer#is_workgroup}
  */
  readonly isWorkgroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#netbios DataNetappCloudmanagerCifsServer#netbios}
  */
  readonly netbios?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#organizational_unit DataNetappCloudmanagerCifsServer#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#password DataNetappCloudmanagerCifsServer#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#server_name DataNetappCloudmanagerCifsServer#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#svm_name DataNetappCloudmanagerCifsServer#svm_name}
  */
  readonly svmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#username DataNetappCloudmanagerCifsServer#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#workgroup_name DataNetappCloudmanagerCifsServer#workgroup_name}
  */
  readonly workgroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#working_environment_id DataNetappCloudmanagerCifsServer#working_environment_id}
  */
  readonly workingEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#working_environment_name DataNetappCloudmanagerCifsServer#working_environment_name}
  */
  readonly workingEnvironmentName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server netapp-cloudmanager_cifs_server}
*/
export class DataNetappCloudmanagerCifsServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_cifs_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappCloudmanagerCifsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappCloudmanagerCifsServer to import
  * @param importFromId The id of the existing DataNetappCloudmanagerCifsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappCloudmanagerCifsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_cifs_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/data-sources/cifs_server netapp-cloudmanager_cifs_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappCloudmanagerCifsServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappCloudmanagerCifsServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_cifs_server',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0'
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
    this._dnsDomain = config.dnsDomain;
    this._domain = config.domain;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._isWorkgroup = config.isWorkgroup;
    this._netbios = config.netbios;
    this._organizationalUnit = config.organizationalUnit;
    this._password = config.password;
    this._serverName = config.serverName;
    this._svmName = config.svmName;
    this._username = config.username;
    this._workgroupName = config.workgroupName;
    this._workingEnvironmentId = config.workingEnvironmentId;
    this._workingEnvironmentName = config.workingEnvironmentName;
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

  // dns_domain - computed: false, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // is_workgroup - computed: false, optional: true, required: false
  private _isWorkgroup?: boolean | cdktf.IResolvable; 
  public get isWorkgroup() {
    return this.getBooleanAttribute('is_workgroup');
  }
  public set isWorkgroup(value: boolean | cdktf.IResolvable) {
    this._isWorkgroup = value;
  }
  public resetIsWorkgroup() {
    this._isWorkgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWorkgroupInput() {
    return this._isWorkgroup;
  }

  // netbios - computed: false, optional: true, required: false
  private _netbios?: string; 
  public get netbios() {
    return this.getStringAttribute('netbios');
  }
  public set netbios(value: string) {
    this._netbios = value;
  }
  public resetNetbios() {
    this._netbios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosInput() {
    return this._netbios;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // workgroup_name - computed: false, optional: true, required: false
  private _workgroupName?: string; 
  public get workgroupName() {
    return this.getStringAttribute('workgroup_name');
  }
  public set workgroupName(value: string) {
    this._workgroupName = value;
  }
  public resetWorkgroupName() {
    this._workgroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupNameInput() {
    return this._workgroupName;
  }

  // working_environment_id - computed: false, optional: true, required: false
  private _workingEnvironmentId?: string; 
  public get workingEnvironmentId() {
    return this.getStringAttribute('working_environment_id');
  }
  public set workingEnvironmentId(value: string) {
    this._workingEnvironmentId = value;
  }
  public resetWorkingEnvironmentId() {
    this._workingEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentIdInput() {
    return this._workingEnvironmentId;
  }

  // working_environment_name - computed: false, optional: true, required: false
  private _workingEnvironmentName?: string; 
  public get workingEnvironmentName() {
    return this.getStringAttribute('working_environment_name');
  }
  public set workingEnvironmentName(value: string) {
    this._workingEnvironmentName = value;
  }
  public resetWorkingEnvironmentName() {
    this._workingEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentNameInput() {
    return this._workingEnvironmentName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      dns_domain: cdktf.stringToTerraform(this._dnsDomain),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      is_workgroup: cdktf.booleanToTerraform(this._isWorkgroup),
      netbios: cdktf.stringToTerraform(this._netbios),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      password: cdktf.stringToTerraform(this._password),
      server_name: cdktf.stringToTerraform(this._serverName),
      svm_name: cdktf.stringToTerraform(this._svmName),
      username: cdktf.stringToTerraform(this._username),
      workgroup_name: cdktf.stringToTerraform(this._workgroupName),
      working_environment_id: cdktf.stringToTerraform(this._workingEnvironmentId),
      working_environment_name: cdktf.stringToTerraform(this._workingEnvironmentName),
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
      dns_domain: {
        value: cdktf.stringToHclTerraform(this._dnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_workgroup: {
        value: cdktf.booleanToHclTerraform(this._isWorkgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      netbios: {
        value: cdktf.stringToHclTerraform(this._netbios),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workgroup_name: {
        value: cdktf.stringToHclTerraform(this._workgroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_id: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_name: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
