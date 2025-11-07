// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CircuitTerminationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#circuit_id CircuitTermination#circuit_id}
  */
  readonly circuitId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#custom_fields CircuitTermination#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#id CircuitTermination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Exactly one of `site_id`, `site_group_id`, `region_id` or `provider_network_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#location_id CircuitTermination#location_id}
  */
  readonly locationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#port_speed CircuitTermination#port_speed}
  */
  readonly portSpeed?: number;
  /**
  * Exactly one of `location_id`, `site_id`, `site_group_id` or `region_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#provider_network_id CircuitTermination#provider_network_id}
  */
  readonly providerNetworkId?: number;
  /**
  * Exactly one of `location_id`, `site_id`, `site_group_id` or `provider_network_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#region_id CircuitTermination#region_id}
  */
  readonly regionId?: number;
  /**
  * Exactly one of `location_id`, `site_id`, `region_id` or `provider_network_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#site_group_id CircuitTermination#site_group_id}
  */
  readonly siteGroupId?: number;
  /**
  * Exactly one of `location_id`, `site_group_id`, `region_id` or `provider_network_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#site_id CircuitTermination#site_id}
  */
  readonly siteId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#tags CircuitTermination#tags}
  */
  readonly tags?: string[];
  /**
  * Valid values are `A` and `Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#term_side CircuitTermination#term_side}
  */
  readonly termSide: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#upstream_speed CircuitTermination#upstream_speed}
  */
  readonly upstreamSpeed?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination netbox_circuit_termination}
*/
export class CircuitTermination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_circuit_termination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CircuitTermination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CircuitTermination to import
  * @param importFromId The id of the existing CircuitTermination that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CircuitTermination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_circuit_termination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/circuit_termination netbox_circuit_termination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CircuitTerminationConfig
  */
  public constructor(scope: Construct, id: string, config: CircuitTerminationConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_circuit_termination',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._circuitId = config.circuitId;
    this._customFields = config.customFields;
    this._id = config.id;
    this._locationId = config.locationId;
    this._portSpeed = config.portSpeed;
    this._providerNetworkId = config.providerNetworkId;
    this._regionId = config.regionId;
    this._siteGroupId = config.siteGroupId;
    this._siteId = config.siteId;
    this._tags = config.tags;
    this._termSide = config.termSide;
    this._upstreamSpeed = config.upstreamSpeed;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: number; 
  public get circuitId() {
    return this.getNumberAttribute('circuit_id');
  }
  public set circuitId(value: number) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
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

  // location_id - computed: false, optional: true, required: false
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // port_speed - computed: false, optional: true, required: false
  private _portSpeed?: number; 
  public get portSpeed() {
    return this.getNumberAttribute('port_speed');
  }
  public set portSpeed(value: number) {
    this._portSpeed = value;
  }
  public resetPortSpeed() {
    this._portSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpeedInput() {
    return this._portSpeed;
  }

  // provider_network_id - computed: false, optional: true, required: false
  private _providerNetworkId?: number; 
  public get providerNetworkId() {
    return this.getNumberAttribute('provider_network_id');
  }
  public set providerNetworkId(value: number) {
    this._providerNetworkId = value;
  }
  public resetProviderNetworkId() {
    this._providerNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNetworkIdInput() {
    return this._providerNetworkId;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // site_group_id - computed: false, optional: true, required: false
  private _siteGroupId?: number; 
  public get siteGroupId() {
    return this.getNumberAttribute('site_group_id');
  }
  public set siteGroupId(value: number) {
    this._siteGroupId = value;
  }
  public resetSiteGroupId() {
    this._siteGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteGroupIdInput() {
    return this._siteGroupId;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // term_side - computed: false, optional: false, required: true
  private _termSide?: string; 
  public get termSide() {
    return this.getStringAttribute('term_side');
  }
  public set termSide(value: string) {
    this._termSide = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termSideInput() {
    return this._termSide;
  }

  // upstream_speed - computed: false, optional: true, required: false
  private _upstreamSpeed?: number; 
  public get upstreamSpeed() {
    return this.getNumberAttribute('upstream_speed');
  }
  public set upstreamSpeed(value: number) {
    this._upstreamSpeed = value;
  }
  public resetUpstreamSpeed() {
    this._upstreamSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamSpeedInput() {
    return this._upstreamSpeed;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      circuit_id: cdktf.numberToTerraform(this._circuitId),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.numberToTerraform(this._locationId),
      port_speed: cdktf.numberToTerraform(this._portSpeed),
      provider_network_id: cdktf.numberToTerraform(this._providerNetworkId),
      region_id: cdktf.numberToTerraform(this._regionId),
      site_group_id: cdktf.numberToTerraform(this._siteGroupId),
      site_id: cdktf.numberToTerraform(this._siteId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      term_side: cdktf.stringToTerraform(this._termSide),
      upstream_speed: cdktf.numberToTerraform(this._upstreamSpeed),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      circuit_id: {
        value: cdktf.numberToHclTerraform(this._circuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_speed: {
        value: cdktf.numberToHclTerraform(this._portSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_network_id: {
        value: cdktf.numberToHclTerraform(this._providerNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_group_id: {
        value: cdktf.numberToHclTerraform(this._siteGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      term_side: {
        value: cdktf.stringToHclTerraform(this._termSide),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_speed: {
        value: cdktf.numberToHclTerraform(this._upstreamSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
