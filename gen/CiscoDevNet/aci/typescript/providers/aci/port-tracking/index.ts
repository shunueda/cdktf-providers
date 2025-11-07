// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortTrackingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#admin_st PortTracking#admin_st}
  */
  readonly adminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#annotation PortTracking#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#delay PortTracking#delay}
  */
  readonly delay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#description PortTracking#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#id PortTracking#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#include_apic_ports PortTracking#include_apic_ports}
  */
  readonly includeApicPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#minlinks PortTracking#minlinks}
  */
  readonly minlinks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#name_alias PortTracking#name_alias}
  */
  readonly nameAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking aci_port_tracking}
*/
export class PortTracking extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_port_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortTracking resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortTracking to import
  * @param importFromId The id of the existing PortTracking that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortTracking to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_port_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/port_tracking aci_port_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortTrackingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PortTrackingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_port_tracking',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminSt = config.adminSt;
    this._annotation = config.annotation;
    this._delay = config.delay;
    this._description = config.description;
    this._id = config.id;
    this._includeApicPorts = config.includeApicPorts;
    this._minlinks = config.minlinks;
    this._nameAlias = config.nameAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_st - computed: true, optional: true, required: false
  private _adminSt?: string; 
  public get adminSt() {
    return this.getStringAttribute('admin_st');
  }
  public set adminSt(value: string) {
    this._adminSt = value;
  }
  public resetAdminSt() {
    this._adminSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStInput() {
    return this._adminSt;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // include_apic_ports - computed: true, optional: true, required: false
  private _includeApicPorts?: string; 
  public get includeApicPorts() {
    return this.getStringAttribute('include_apic_ports');
  }
  public set includeApicPorts(value: string) {
    this._includeApicPorts = value;
  }
  public resetIncludeApicPorts() {
    this._includeApicPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApicPortsInput() {
    return this._includeApicPorts;
  }

  // minlinks - computed: true, optional: true, required: false
  private _minlinks?: string; 
  public get minlinks() {
    return this.getStringAttribute('minlinks');
  }
  public set minlinks(value: string) {
    this._minlinks = value;
  }
  public resetMinlinks() {
    this._minlinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minlinksInput() {
    return this._minlinks;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_st: cdktf.stringToTerraform(this._adminSt),
      annotation: cdktf.stringToTerraform(this._annotation),
      delay: cdktf.stringToTerraform(this._delay),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      include_apic_ports: cdktf.stringToTerraform(this._includeApicPorts),
      minlinks: cdktf.stringToTerraform(this._minlinks),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_st: {
        value: cdktf.stringToHclTerraform(this._adminSt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay: {
        value: cdktf.stringToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      include_apic_ports: {
        value: cdktf.stringToHclTerraform(this._includeApicPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minlinks: {
        value: cdktf.stringToHclTerraform(this._minlinks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
