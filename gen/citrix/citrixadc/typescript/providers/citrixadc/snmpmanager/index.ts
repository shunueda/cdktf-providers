// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmanager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpmanagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmanager#domainresolveretry Snmpmanager#domainresolveretry}
  */
  readonly domainresolveretry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmanager#id Snmpmanager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmanager#ipaddress Snmpmanager#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmanager#netmask Snmpmanager#netmask}
  */
  readonly netmask?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmanager citrixadc_snmpmanager}
*/
export class Snmpmanager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_snmpmanager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmpmanager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmpmanager to import
  * @param importFromId The id of the existing Snmpmanager that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmanager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmpmanager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_snmpmanager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmanager citrixadc_snmpmanager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpmanagerConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpmanagerConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_snmpmanager',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainresolveretry = config.domainresolveretry;
    this._id = config.id;
    this._ipaddress = config.ipaddress;
    this._netmask = config.netmask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domainresolveretry - computed: true, optional: true, required: false
  private _domainresolveretry?: number; 
  public get domainresolveretry() {
    return this.getNumberAttribute('domainresolveretry');
  }
  public set domainresolveretry(value: number) {
    this._domainresolveretry = value;
  }
  public resetDomainresolveretry() {
    this._domainresolveretry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainresolveretryInput() {
    return this._domainresolveretry;
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

  // ipaddress - computed: false, optional: false, required: true
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domainresolveretry: cdktf.numberToTerraform(this._domainresolveretry),
      id: cdktf.stringToTerraform(this._id),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      netmask: cdktf.stringToTerraform(this._netmask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domainresolveretry: {
        value: cdktf.numberToHclTerraform(this._domainresolveretry),
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
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
