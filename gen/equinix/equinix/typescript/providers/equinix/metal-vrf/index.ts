// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf#description MetalVrf#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf#id MetalVrf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * All IPv4 and IPv6 Ranges that will be available to BGP Peers. IPv4 addresses must be /8 or smaller with a minimum size of /29. IPv6 must be /56 or smaller with a minimum size of /64. Ranges must not overlap other ranges within the VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf#ip_ranges MetalVrf#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * The 4-byte ASN set on the VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf#local_asn MetalVrf#local_asn}
  */
  readonly localAsn?: number;
  /**
  * Metro ID or Code where the VRF will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf#metro MetalVrf#metro}
  */
  readonly metro: string;
  /**
  * User-supplied name of the VRF, unique to the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf#name MetalVrf#name}
  */
  readonly name: string;
  /**
  * Project ID where the VRF will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf#project_id MetalVrf#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf equinix_metal_vrf}
*/
export class MetalVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalVrf to import
  * @param importFromId The id of the existing MetalVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_vrf equinix_metal_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalVrfConfig
  */
  public constructor(scope: Construct, id: string, config: MetalVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_vrf',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ipRanges = config.ipRanges;
    this._localAsn = config.localAsn;
    this._metro = config.metro;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_ranges'));
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // local_asn - computed: true, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // metro - computed: false, optional: false, required: true
  private _metro?: string; 
  public get metro() {
    return this.getStringAttribute('metro');
  }
  public set metro(value: string) {
    this._metro = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metroInput() {
    return this._metro;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipRanges),
      local_asn: cdktf.numberToTerraform(this._localAsn),
      metro: cdktf.stringToTerraform(this._metro),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_asn: {
        value: cdktf.numberToHclTerraform(this._localAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metro: {
        value: cdktf.stringToHclTerraform(this._metro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
