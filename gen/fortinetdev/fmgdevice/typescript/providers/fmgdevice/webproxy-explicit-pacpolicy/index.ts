// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebproxyExplicitPacpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#comments WebproxyExplicitPacpolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#device_name WebproxyExplicitPacpolicy#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#device_vdom WebproxyExplicitPacpolicy#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#dstaddr WebproxyExplicitPacpolicy#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#id WebproxyExplicitPacpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#pac_file_data WebproxyExplicitPacpolicy#pac_file_data}
  */
  readonly pacFileData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#pac_file_name WebproxyExplicitPacpolicy#pac_file_name}
  */
  readonly pacFileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#policyid WebproxyExplicitPacpolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#srcaddr WebproxyExplicitPacpolicy#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#srcaddr6 WebproxyExplicitPacpolicy#srcaddr6}
  */
  readonly srcaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#status WebproxyExplicitPacpolicy#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy fmgdevice_webproxy_explicit_pacpolicy}
*/
export class WebproxyExplicitPacpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_webproxy_explicit_pacpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebproxyExplicitPacpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebproxyExplicitPacpolicy to import
  * @param importFromId The id of the existing WebproxyExplicitPacpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebproxyExplicitPacpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_webproxy_explicit_pacpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webproxy_explicit_pacpolicy fmgdevice_webproxy_explicit_pacpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebproxyExplicitPacpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebproxyExplicitPacpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_webproxy_explicit_pacpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dstaddr = config.dstaddr;
    this._id = config.id;
    this._pacFileData = config.pacFileData;
    this._pacFileName = config.pacFileName;
    this._policyid = config.policyid;
    this._srcaddr = config.srcaddr;
    this._srcaddr6 = config.srcaddr6;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
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

  // pac_file_data - computed: false, optional: true, required: false
  private _pacFileData?: string; 
  public get pacFileData() {
    return this.getStringAttribute('pac_file_data');
  }
  public set pacFileData(value: string) {
    this._pacFileData = value;
  }
  public resetPacFileData() {
    this._pacFileData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileDataInput() {
    return this._pacFileData;
  }

  // pac_file_name - computed: true, optional: true, required: false
  private _pacFileName?: string; 
  public get pacFileName() {
    return this.getStringAttribute('pac_file_name');
  }
  public set pacFileName(value: string) {
    this._pacFileName = value;
  }
  public resetPacFileName() {
    this._pacFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileNameInput() {
    return this._pacFileName;
  }

  // policyid - computed: false, optional: true, required: false
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: true, optional: true, required: false
  private _srcaddr6?: string[]; 
  public get srcaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr6'));
  }
  public set srcaddr6(value: string[]) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      id: cdktf.stringToTerraform(this._id),
      pac_file_data: cdktf.stringToTerraform(this._pacFileData),
      pac_file_name: cdktf.stringToTerraform(this._pacFileName),
      policyid: cdktf.numberToTerraform(this._policyid),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr6),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_file_data: {
        value: cdktf.stringToHclTerraform(this._pacFileData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_file_name: {
        value: cdktf.stringToHclTerraform(this._pacFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
