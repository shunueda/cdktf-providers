// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#destination_port_max SystemService#destination_port_max}
  */
  readonly destinationPortMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#destination_port_min SystemService#destination_port_min}
  */
  readonly destinationPortMin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#id SystemService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#mkey SystemService#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#protocol SystemService#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#protocol_type SystemService#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#source_port_max SystemService#source_port_max}
  */
  readonly sourcePortMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#source_port_min SystemService#source_port_min}
  */
  readonly sourcePortMin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#specify_source_port SystemService#specify_source_port}
  */
  readonly specifySourcePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#vdom SystemService#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service fortiadc_system_service}
*/
export class SystemService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemService to import
  * @param importFromId The id of the existing SystemService that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_service fortiadc_system_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SystemServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_service',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationPortMax = config.destinationPortMax;
    this._destinationPortMin = config.destinationPortMin;
    this._id = config.id;
    this._mkey = config.mkey;
    this._protocol = config.protocol;
    this._protocolType = config.protocolType;
    this._sourcePortMax = config.sourcePortMax;
    this._sourcePortMin = config.sourcePortMin;
    this._specifySourcePort = config.specifySourcePort;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_port_max - computed: true, optional: true, required: false
  private _destinationPortMax?: string; 
  public get destinationPortMax() {
    return this.getStringAttribute('destination_port_max');
  }
  public set destinationPortMax(value: string) {
    this._destinationPortMax = value;
  }
  public resetDestinationPortMax() {
    this._destinationPortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortMaxInput() {
    return this._destinationPortMax;
  }

  // destination_port_min - computed: true, optional: true, required: false
  private _destinationPortMin?: string; 
  public get destinationPortMin() {
    return this.getStringAttribute('destination_port_min');
  }
  public set destinationPortMin(value: string) {
    this._destinationPortMin = value;
  }
  public resetDestinationPortMin() {
    this._destinationPortMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortMinInput() {
    return this._destinationPortMin;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
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

  // protocol_type - computed: true, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // source_port_max - computed: true, optional: true, required: false
  private _sourcePortMax?: string; 
  public get sourcePortMax() {
    return this.getStringAttribute('source_port_max');
  }
  public set sourcePortMax(value: string) {
    this._sourcePortMax = value;
  }
  public resetSourcePortMax() {
    this._sourcePortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortMaxInput() {
    return this._sourcePortMax;
  }

  // source_port_min - computed: true, optional: true, required: false
  private _sourcePortMin?: string; 
  public get sourcePortMin() {
    return this.getStringAttribute('source_port_min');
  }
  public set sourcePortMin(value: string) {
    this._sourcePortMin = value;
  }
  public resetSourcePortMin() {
    this._sourcePortMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortMinInput() {
    return this._sourcePortMin;
  }

  // specify_source_port - computed: true, optional: true, required: false
  private _specifySourcePort?: string; 
  public get specifySourcePort() {
    return this.getStringAttribute('specify_source_port');
  }
  public set specifySourcePort(value: string) {
    this._specifySourcePort = value;
  }
  public resetSpecifySourcePort() {
    this._specifySourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifySourcePortInput() {
    return this._specifySourcePort;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_port_max: cdktf.stringToTerraform(this._destinationPortMax),
      destination_port_min: cdktf.stringToTerraform(this._destinationPortMin),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      source_port_max: cdktf.stringToTerraform(this._sourcePortMax),
      source_port_min: cdktf.stringToTerraform(this._sourcePortMin),
      specify_source_port: cdktf.stringToTerraform(this._specifySourcePort),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_port_max: {
        value: cdktf.stringToHclTerraform(this._destinationPortMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_min: {
        value: cdktf.stringToHclTerraform(this._destinationPortMin),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
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
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_max: {
        value: cdktf.stringToHclTerraform(this._sourcePortMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_min: {
        value: cdktf.stringToHclTerraform(this._sourcePortMin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specify_source_port: {
        value: cdktf.stringToHclTerraform(this._specifySourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
