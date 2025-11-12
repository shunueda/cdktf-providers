// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNetworkvisibilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#destination_hostname_visibility SystemNetworkvisibility#destination_hostname_visibility}
  */
  readonly destinationHostnameVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#destination_location SystemNetworkvisibility#destination_location}
  */
  readonly destinationLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#destination_visibility SystemNetworkvisibility#destination_visibility}
  */
  readonly destinationVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#hostname_limit SystemNetworkvisibility#hostname_limit}
  */
  readonly hostnameLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#hostname_ttl SystemNetworkvisibility#hostname_ttl}
  */
  readonly hostnameTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#id SystemNetworkvisibility#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#source_location SystemNetworkvisibility#source_location}
  */
  readonly sourceLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#vdomparam SystemNetworkvisibility#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility fortios_system_networkvisibility}
*/
export class SystemNetworkvisibility extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_networkvisibility";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNetworkvisibility resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNetworkvisibility to import
  * @param importFromId The id of the existing SystemNetworkvisibility that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNetworkvisibility to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_networkvisibility", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_networkvisibility fortios_system_networkvisibility} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNetworkvisibilityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemNetworkvisibilityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_networkvisibility',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationHostnameVisibility = config.destinationHostnameVisibility;
    this._destinationLocation = config.destinationLocation;
    this._destinationVisibility = config.destinationVisibility;
    this._hostnameLimit = config.hostnameLimit;
    this._hostnameTtl = config.hostnameTtl;
    this._id = config.id;
    this._sourceLocation = config.sourceLocation;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_hostname_visibility - computed: true, optional: true, required: false
  private _destinationHostnameVisibility?: string; 
  public get destinationHostnameVisibility() {
    return this.getStringAttribute('destination_hostname_visibility');
  }
  public set destinationHostnameVisibility(value: string) {
    this._destinationHostnameVisibility = value;
  }
  public resetDestinationHostnameVisibility() {
    this._destinationHostnameVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHostnameVisibilityInput() {
    return this._destinationHostnameVisibility;
  }

  // destination_location - computed: true, optional: true, required: false
  private _destinationLocation?: string; 
  public get destinationLocation() {
    return this.getStringAttribute('destination_location');
  }
  public set destinationLocation(value: string) {
    this._destinationLocation = value;
  }
  public resetDestinationLocation() {
    this._destinationLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLocationInput() {
    return this._destinationLocation;
  }

  // destination_visibility - computed: true, optional: true, required: false
  private _destinationVisibility?: string; 
  public get destinationVisibility() {
    return this.getStringAttribute('destination_visibility');
  }
  public set destinationVisibility(value: string) {
    this._destinationVisibility = value;
  }
  public resetDestinationVisibility() {
    this._destinationVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVisibilityInput() {
    return this._destinationVisibility;
  }

  // hostname_limit - computed: true, optional: true, required: false
  private _hostnameLimit?: number; 
  public get hostnameLimit() {
    return this.getNumberAttribute('hostname_limit');
  }
  public set hostnameLimit(value: number) {
    this._hostnameLimit = value;
  }
  public resetHostnameLimit() {
    this._hostnameLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLimitInput() {
    return this._hostnameLimit;
  }

  // hostname_ttl - computed: true, optional: true, required: false
  private _hostnameTtl?: number; 
  public get hostnameTtl() {
    return this.getNumberAttribute('hostname_ttl');
  }
  public set hostnameTtl(value: number) {
    this._hostnameTtl = value;
  }
  public resetHostnameTtl() {
    this._hostnameTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameTtlInput() {
    return this._hostnameTtl;
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

  // source_location - computed: true, optional: true, required: false
  private _sourceLocation?: string; 
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }
  public set sourceLocation(value: string) {
    this._sourceLocation = value;
  }
  public resetSourceLocation() {
    this._sourceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationInput() {
    return this._sourceLocation;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_hostname_visibility: cdktf.stringToTerraform(this._destinationHostnameVisibility),
      destination_location: cdktf.stringToTerraform(this._destinationLocation),
      destination_visibility: cdktf.stringToTerraform(this._destinationVisibility),
      hostname_limit: cdktf.numberToTerraform(this._hostnameLimit),
      hostname_ttl: cdktf.numberToTerraform(this._hostnameTtl),
      id: cdktf.stringToTerraform(this._id),
      source_location: cdktf.stringToTerraform(this._sourceLocation),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_hostname_visibility: {
        value: cdktf.stringToHclTerraform(this._destinationHostnameVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_location: {
        value: cdktf.stringToHclTerraform(this._destinationLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_visibility: {
        value: cdktf.stringToHclTerraform(this._destinationVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_limit: {
        value: cdktf.numberToHclTerraform(this._hostnameLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hostname_ttl: {
        value: cdktf.numberToHclTerraform(this._hostnameTtl),
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
      source_location: {
        value: cdktf.stringToHclTerraform(this._sourceLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
