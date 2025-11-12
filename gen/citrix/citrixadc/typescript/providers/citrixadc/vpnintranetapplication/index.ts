// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnintranetapplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#clientapplication Vpnintranetapplication#clientapplication}
  */
  readonly clientapplication?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#destip Vpnintranetapplication#destip}
  */
  readonly destip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#destport Vpnintranetapplication#destport}
  */
  readonly destport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#hostname Vpnintranetapplication#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#id Vpnintranetapplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#interception Vpnintranetapplication#interception}
  */
  readonly interception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#intranetapplication Vpnintranetapplication#intranetapplication}
  */
  readonly intranetapplication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#iprange Vpnintranetapplication#iprange}
  */
  readonly iprange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#netmask Vpnintranetapplication#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#protocol Vpnintranetapplication#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#spoofiip Vpnintranetapplication#spoofiip}
  */
  readonly spoofiip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#srcip Vpnintranetapplication#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#srcport Vpnintranetapplication#srcport}
  */
  readonly srcport?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication citrixadc_vpnintranetapplication}
*/
export class Vpnintranetapplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnintranetapplication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnintranetapplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnintranetapplication to import
  * @param importFromId The id of the existing Vpnintranetapplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnintranetapplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnintranetapplication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnintranetapplication citrixadc_vpnintranetapplication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnintranetapplicationConfig
  */
  public constructor(scope: Construct, id: string, config: VpnintranetapplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnintranetapplication',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientapplication = config.clientapplication;
    this._destip = config.destip;
    this._destport = config.destport;
    this._hostname = config.hostname;
    this._id = config.id;
    this._interception = config.interception;
    this._intranetapplication = config.intranetapplication;
    this._iprange = config.iprange;
    this._netmask = config.netmask;
    this._protocol = config.protocol;
    this._spoofiip = config.spoofiip;
    this._srcip = config.srcip;
    this._srcport = config.srcport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientapplication - computed: true, optional: true, required: false
  private _clientapplication?: string[]; 
  public get clientapplication() {
    return this.getListAttribute('clientapplication');
  }
  public set clientapplication(value: string[]) {
    this._clientapplication = value;
  }
  public resetClientapplication() {
    this._clientapplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientapplicationInput() {
    return this._clientapplication;
  }

  // destip - computed: true, optional: true, required: false
  private _destip?: string; 
  public get destip() {
    return this.getStringAttribute('destip');
  }
  public set destip(value: string) {
    this._destip = value;
  }
  public resetDestip() {
    this._destip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipInput() {
    return this._destip;
  }

  // destport - computed: true, optional: true, required: false
  private _destport?: string; 
  public get destport() {
    return this.getStringAttribute('destport');
  }
  public set destport(value: string) {
    this._destport = value;
  }
  public resetDestport() {
    this._destport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportInput() {
    return this._destport;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // interception - computed: true, optional: true, required: false
  private _interception?: string; 
  public get interception() {
    return this.getStringAttribute('interception');
  }
  public set interception(value: string) {
    this._interception = value;
  }
  public resetInterception() {
    this._interception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionInput() {
    return this._interception;
  }

  // intranetapplication - computed: false, optional: false, required: true
  private _intranetapplication?: string; 
  public get intranetapplication() {
    return this.getStringAttribute('intranetapplication');
  }
  public set intranetapplication(value: string) {
    this._intranetapplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetapplicationInput() {
    return this._intranetapplication;
  }

  // iprange - computed: true, optional: true, required: false
  private _iprange?: string; 
  public get iprange() {
    return this.getStringAttribute('iprange');
  }
  public set iprange(value: string) {
    this._iprange = value;
  }
  public resetIprange() {
    this._iprange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iprangeInput() {
    return this._iprange;
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

  // spoofiip - computed: true, optional: true, required: false
  private _spoofiip?: string; 
  public get spoofiip() {
    return this.getStringAttribute('spoofiip');
  }
  public set spoofiip(value: string) {
    this._spoofiip = value;
  }
  public resetSpoofiip() {
    this._spoofiip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofiipInput() {
    return this._spoofiip;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // srcport - computed: true, optional: true, required: false
  private _srcport?: number; 
  public get srcport() {
    return this.getNumberAttribute('srcport');
  }
  public set srcport(value: number) {
    this._srcport = value;
  }
  public resetSrcport() {
    this._srcport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clientapplication: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientapplication),
      destip: cdktf.stringToTerraform(this._destip),
      destport: cdktf.stringToTerraform(this._destport),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      interception: cdktf.stringToTerraform(this._interception),
      intranetapplication: cdktf.stringToTerraform(this._intranetapplication),
      iprange: cdktf.stringToTerraform(this._iprange),
      netmask: cdktf.stringToTerraform(this._netmask),
      protocol: cdktf.stringToTerraform(this._protocol),
      spoofiip: cdktf.stringToTerraform(this._spoofiip),
      srcip: cdktf.stringToTerraform(this._srcip),
      srcport: cdktf.numberToTerraform(this._srcport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientapplication: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientapplication),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destip: {
        value: cdktf.stringToHclTerraform(this._destip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destport: {
        value: cdktf.stringToHclTerraform(this._destport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      interception: {
        value: cdktf.stringToHclTerraform(this._interception),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intranetapplication: {
        value: cdktf.stringToHclTerraform(this._intranetapplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iprange: {
        value: cdktf.stringToHclTerraform(this._iprange),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoofiip: {
        value: cdktf.stringToHclTerraform(this._spoofiip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcip: {
        value: cdktf.stringToHclTerraform(this._srcip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcport: {
        value: cdktf.numberToHclTerraform(this._srcport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
