// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nssimpleacl6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#aclaction Nssimpleacl6#aclaction}
  */
  readonly aclaction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#aclname Nssimpleacl6#aclname}
  */
  readonly aclname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#destport Nssimpleacl6#destport}
  */
  readonly destport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#estsessions Nssimpleacl6#estsessions}
  */
  readonly estsessions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#id Nssimpleacl6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#protocol Nssimpleacl6#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#srcipv6 Nssimpleacl6#srcipv6}
  */
  readonly srcipv6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#td Nssimpleacl6#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#ttl Nssimpleacl6#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6 citrixadc_nssimpleacl6}
*/
export class Nssimpleacl6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nssimpleacl6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nssimpleacl6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nssimpleacl6 to import
  * @param importFromId The id of the existing Nssimpleacl6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nssimpleacl6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nssimpleacl6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nssimpleacl6 citrixadc_nssimpleacl6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nssimpleacl6Config
  */
  public constructor(scope: Construct, id: string, config: Nssimpleacl6Config) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nssimpleacl6',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclaction = config.aclaction;
    this._aclname = config.aclname;
    this._destport = config.destport;
    this._estsessions = config.estsessions;
    this._id = config.id;
    this._protocol = config.protocol;
    this._srcipv6 = config.srcipv6;
    this._td = config.td;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aclaction - computed: false, optional: false, required: true
  private _aclaction?: string; 
  public get aclaction() {
    return this.getStringAttribute('aclaction');
  }
  public set aclaction(value: string) {
    this._aclaction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclactionInput() {
    return this._aclaction;
  }

  // aclname - computed: false, optional: false, required: true
  private _aclname?: string; 
  public get aclname() {
    return this.getStringAttribute('aclname');
  }
  public set aclname(value: string) {
    this._aclname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclnameInput() {
    return this._aclname;
  }

  // destport - computed: true, optional: true, required: false
  private _destport?: number; 
  public get destport() {
    return this.getNumberAttribute('destport');
  }
  public set destport(value: number) {
    this._destport = value;
  }
  public resetDestport() {
    this._destport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportInput() {
    return this._destport;
  }

  // estsessions - computed: true, optional: true, required: false
  private _estsessions?: boolean | cdktf.IResolvable; 
  public get estsessions() {
    return this.getBooleanAttribute('estsessions');
  }
  public set estsessions(value: boolean | cdktf.IResolvable) {
    this._estsessions = value;
  }
  public resetEstsessions() {
    this._estsessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estsessionsInput() {
    return this._estsessions;
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

  // srcipv6 - computed: false, optional: false, required: true
  private _srcipv6?: string; 
  public get srcipv6() {
    return this.getStringAttribute('srcipv6');
  }
  public set srcipv6(value: string) {
    this._srcipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipv6Input() {
    return this._srcipv6;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aclaction: cdktf.stringToTerraform(this._aclaction),
      aclname: cdktf.stringToTerraform(this._aclname),
      destport: cdktf.numberToTerraform(this._destport),
      estsessions: cdktf.booleanToTerraform(this._estsessions),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      srcipv6: cdktf.stringToTerraform(this._srcipv6),
      td: cdktf.numberToTerraform(this._td),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aclaction: {
        value: cdktf.stringToHclTerraform(this._aclaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aclname: {
        value: cdktf.stringToHclTerraform(this._aclname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destport: {
        value: cdktf.numberToHclTerraform(this._destport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      estsessions: {
        value: cdktf.booleanToHclTerraform(this._estsessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      srcipv6: {
        value: cdktf.stringToHclTerraform(this._srcipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
