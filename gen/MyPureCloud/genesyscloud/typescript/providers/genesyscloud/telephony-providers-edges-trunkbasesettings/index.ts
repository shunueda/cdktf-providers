// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesTrunkbasesettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#description TelephonyProvidersEdgesTrunkbasesettings#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#id TelephonyProvidersEdgesTrunkbasesettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The site to which inbound calls will be routed. Only valid for External BYOC Trunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#inbound_site_id TelephonyProvidersEdgesTrunkbasesettings#inbound_site_id}
  */
  readonly inboundSiteId?: string;
  /**
  * Is this trunk being managed remotely. This property is synchronized with the managed property of the Edge Group to which it is assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#managed TelephonyProvidersEdgesTrunkbasesettings#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#name TelephonyProvidersEdgesTrunkbasesettings#name}
  */
  readonly name: string;
  /**
  * trunk base settings properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#properties TelephonyProvidersEdgesTrunkbasesettings#properties}
  */
  readonly properties?: string;
  /**
  * Used to determine the media regions for inbound and outbound calls through a trunk. Also determines the dial plan to use for calls that came in on a trunk and have to be sent out on it as well.  While this is called the site on the API, in the UI it is referred to as the media site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#site_id TelephonyProvidersEdgesTrunkbasesettings#site_id}
  */
  readonly siteId?: string;
  /**
  * The resource's state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#state TelephonyProvidersEdgesTrunkbasesettings#state}
  */
  readonly state?: string;
  /**
  * The meta-base this trunk is based on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#trunk_meta_base_id TelephonyProvidersEdgesTrunkbasesettings#trunk_meta_base_id}
  */
  readonly trunkMetaBaseId: string;
  /**
  * The type of this trunk base.Valid values: EXTERNAL, PHONE, EDGE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#trunk_type TelephonyProvidersEdgesTrunkbasesettings#trunk_type}
  */
  readonly trunkType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings genesyscloud_telephony_providers_edges_trunkbasesettings}
*/
export class TelephonyProvidersEdgesTrunkbasesettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_trunkbasesettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesTrunkbasesettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesTrunkbasesettings to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesTrunkbasesettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesTrunkbasesettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_trunkbasesettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/telephony_providers_edges_trunkbasesettings genesyscloud_telephony_providers_edges_trunkbasesettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesTrunkbasesettingsConfig
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesTrunkbasesettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_trunkbasesettings',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._inboundSiteId = config.inboundSiteId;
    this._managed = config.managed;
    this._name = config.name;
    this._properties = config.properties;
    this._siteId = config.siteId;
    this._state = config.state;
    this._trunkMetaBaseId = config.trunkMetaBaseId;
    this._trunkType = config.trunkType;
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

  // inbound_site_id - computed: false, optional: true, required: false
  private _inboundSiteId?: string; 
  public get inboundSiteId() {
    return this.getStringAttribute('inbound_site_id');
  }
  public set inboundSiteId(value: string) {
    this._inboundSiteId = value;
  }
  public resetInboundSiteId() {
    this._inboundSiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundSiteIdInput() {
    return this._inboundSiteId;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
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

  // properties - computed: true, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // trunk_meta_base_id - computed: false, optional: false, required: true
  private _trunkMetaBaseId?: string; 
  public get trunkMetaBaseId() {
    return this.getStringAttribute('trunk_meta_base_id');
  }
  public set trunkMetaBaseId(value: string) {
    this._trunkMetaBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkMetaBaseIdInput() {
    return this._trunkMetaBaseId;
  }

  // trunk_type - computed: false, optional: false, required: true
  private _trunkType?: string; 
  public get trunkType() {
    return this.getStringAttribute('trunk_type');
  }
  public set trunkType(value: string) {
    this._trunkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkTypeInput() {
    return this._trunkType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      inbound_site_id: cdktf.stringToTerraform(this._inboundSiteId),
      managed: cdktf.booleanToTerraform(this._managed),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.stringToTerraform(this._properties),
      site_id: cdktf.stringToTerraform(this._siteId),
      state: cdktf.stringToTerraform(this._state),
      trunk_meta_base_id: cdktf.stringToTerraform(this._trunkMetaBaseId),
      trunk_type: cdktf.stringToTerraform(this._trunkType),
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
      inbound_site_id: {
        value: cdktf.stringToHclTerraform(this._inboundSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.stringToHclTerraform(this._properties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_meta_base_id: {
        value: cdktf.stringToHclTerraform(this._trunkMetaBaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_type: {
        value: cdktf.stringToHclTerraform(this._trunkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
