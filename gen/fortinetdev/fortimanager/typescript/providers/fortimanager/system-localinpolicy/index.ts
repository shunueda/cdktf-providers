// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLocalinpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#action SystemLocalinpolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#dport SystemLocalinpolicy#dport}
  */
  readonly dport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#dst SystemLocalinpolicy#dst}
  */
  readonly dst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#fosid SystemLocalinpolicy#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#id SystemLocalinpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#intf SystemLocalinpolicy#intf}
  */
  readonly intf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#protocol SystemLocalinpolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#src SystemLocalinpolicy#src}
  */
  readonly src?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy fortimanager_system_localinpolicy}
*/
export class SystemLocalinpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_localinpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLocalinpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLocalinpolicy to import
  * @param importFromId The id of the existing SystemLocalinpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLocalinpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_localinpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_localinpolicy fortimanager_system_localinpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLocalinpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLocalinpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_localinpolicy',
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
    this._dport = config.dport;
    this._dst = config.dst;
    this._fosid = config.fosid;
    this._id = config.id;
    this._intf = config.intf;
    this._protocol = config.protocol;
    this._src = config.src;
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

  // dport - computed: false, optional: true, required: false
  private _dport?: number; 
  public get dport() {
    return this.getNumberAttribute('dport');
  }
  public set dport(value: number) {
    this._dport = value;
  }
  public resetDport() {
    this._dport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dportInput() {
    return this._dport;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string[]; 
  public get dst() {
    return this.getListAttribute('dst');
  }
  public set dst(value: string[]) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
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

  // intf - computed: false, optional: true, required: false
  private _intf?: string; 
  public get intf() {
    return this.getStringAttribute('intf');
  }
  public set intf(value: string) {
    this._intf = value;
  }
  public resetIntf() {
    this._intf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfInput() {
    return this._intf;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string[]; 
  public get src() {
    return this.getListAttribute('src');
  }
  public set src(value: string[]) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      dport: cdktf.numberToTerraform(this._dport),
      dst: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dst),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      intf: cdktf.stringToTerraform(this._intf),
      protocol: cdktf.stringToTerraform(this._protocol),
      src: cdktf.listMapper(cdktf.stringToTerraform, false)(this._src),
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
      dport: {
        value: cdktf.numberToHclTerraform(this._dport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dst),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intf: {
        value: cdktf.stringToHclTerraform(this._intf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._src),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
