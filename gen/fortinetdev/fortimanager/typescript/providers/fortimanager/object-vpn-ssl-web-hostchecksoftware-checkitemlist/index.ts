// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnSslWebHostchecksoftwareCheckitemlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#action ObjectVpnSslWebHostchecksoftwareCheckitemlist#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#adom ObjectVpnSslWebHostchecksoftwareCheckitemlist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#fosid ObjectVpnSslWebHostchecksoftwareCheckitemlist#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#host_check_software ObjectVpnSslWebHostchecksoftwareCheckitemlist#host_check_software}
  */
  readonly hostCheckSoftware: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#id ObjectVpnSslWebHostchecksoftwareCheckitemlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#md5s ObjectVpnSslWebHostchecksoftwareCheckitemlist#md5s}
  */
  readonly md5S?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#scopetype ObjectVpnSslWebHostchecksoftwareCheckitemlist#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#target ObjectVpnSslWebHostchecksoftwareCheckitemlist#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#type ObjectVpnSslWebHostchecksoftwareCheckitemlist#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#version ObjectVpnSslWebHostchecksoftwareCheckitemlist#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist fortimanager_object_vpn_ssl_web_hostchecksoftware_checkitemlist}
*/
export class ObjectVpnSslWebHostchecksoftwareCheckitemlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ssl_web_hostchecksoftware_checkitemlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnSslWebHostchecksoftwareCheckitemlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnSslWebHostchecksoftwareCheckitemlist to import
  * @param importFromId The id of the existing ObjectVpnSslWebHostchecksoftwareCheckitemlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnSslWebHostchecksoftwareCheckitemlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ssl_web_hostchecksoftware_checkitemlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_hostchecksoftware_checkitemlist fortimanager_object_vpn_ssl_web_hostchecksoftware_checkitemlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnSslWebHostchecksoftwareCheckitemlistConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnSslWebHostchecksoftwareCheckitemlistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ssl_web_hostchecksoftware_checkitemlist',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._adom = config.adom;
    this._fosid = config.fosid;
    this._hostCheckSoftware = config.hostCheckSoftware;
    this._id = config.id;
    this._md5S = config.md5S;
    this._scopetype = config.scopetype;
    this._target = config.target;
    this._type = config.type;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // host_check_software - computed: false, optional: false, required: true
  private _hostCheckSoftware?: string; 
  public get hostCheckSoftware() {
    return this.getStringAttribute('host_check_software');
  }
  public set hostCheckSoftware(value: string) {
    this._hostCheckSoftware = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCheckSoftwareInput() {
    return this._hostCheckSoftware;
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

  // md5s - computed: true, optional: true, required: false
  private _md5S?: string[]; 
  public get md5S() {
    return cdktf.Fn.tolist(this.getListAttribute('md5s'));
  }
  public set md5S(value: string[]) {
    this._md5S = value;
  }
  public resetMd5S() {
    this._md5S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5SInput() {
    return this._md5S;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      fosid: cdktf.numberToTerraform(this._fosid),
      host_check_software: cdktf.stringToTerraform(this._hostCheckSoftware),
      id: cdktf.stringToTerraform(this._id),
      md5s: cdktf.listMapper(cdktf.stringToTerraform, false)(this._md5S),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      target: cdktf.stringToTerraform(this._target),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_check_software: {
        value: cdktf.stringToHclTerraform(this._hostCheckSoftware),
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
      md5s: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._md5S),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
