// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesSiteOutboundRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Used to classify this outbound route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#classification_types TelephonyProvidersEdgesSiteOutboundRoute#classification_types}
  */
  readonly classificationTypes: string[];
  /**
  * The resource's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#description TelephonyProvidersEdgesSiteOutboundRoute#description}
  */
  readonly description?: string;
  /**
  * Valid values: SEQUENTIAL, RANDOM. Defaults to `SEQUENTIAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#distribution TelephonyProvidersEdgesSiteOutboundRoute#distribution}
  */
  readonly distribution?: string;
  /**
  * Enable or disable the outbound route Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#enabled TelephonyProvidersEdgesSiteOutboundRoute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Trunk base settings of trunkType "EXTERNAL". This base must also be set on an edge logical interface for correct routing. The order of the IDs determines the distribution if "distribution" is set to "SEQUENTIAL"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#external_trunk_base_ids TelephonyProvidersEdgesSiteOutboundRoute#external_trunk_base_ids}
  */
  readonly externalTrunkBaseIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#id TelephonyProvidersEdgesSiteOutboundRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#name TelephonyProvidersEdgesSiteOutboundRoute#name}
  */
  readonly name: string;
  /**
  * The Id of the site to which the outbound routes belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#site_id TelephonyProvidersEdgesSiteOutboundRoute#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route genesyscloud_telephony_providers_edges_site_outbound_route}
*/
export class TelephonyProvidersEdgesSiteOutboundRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_site_outbound_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesSiteOutboundRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesSiteOutboundRoute to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesSiteOutboundRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesSiteOutboundRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_site_outbound_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_site_outbound_route genesyscloud_telephony_providers_edges_site_outbound_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesSiteOutboundRouteConfig
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesSiteOutboundRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_site_outbound_route',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classificationTypes = config.classificationTypes;
    this._description = config.description;
    this._distribution = config.distribution;
    this._enabled = config.enabled;
    this._externalTrunkBaseIds = config.externalTrunkBaseIds;
    this._id = config.id;
    this._name = config.name;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // classification_types - computed: false, optional: false, required: true
  private _classificationTypes?: string[]; 
  public get classificationTypes() {
    return this.getListAttribute('classification_types');
  }
  public set classificationTypes(value: string[]) {
    this._classificationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationTypesInput() {
    return this._classificationTypes;
  }

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

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_trunk_base_ids - computed: false, optional: true, required: false
  private _externalTrunkBaseIds?: string[]; 
  public get externalTrunkBaseIds() {
    return this.getListAttribute('external_trunk_base_ids');
  }
  public set externalTrunkBaseIds(value: string[]) {
    this._externalTrunkBaseIds = value;
  }
  public resetExternalTrunkBaseIds() {
    this._externalTrunkBaseIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrunkBaseIdsInput() {
    return this._externalTrunkBaseIds;
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

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      classification_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._classificationTypes),
      description: cdktf.stringToTerraform(this._description),
      distribution: cdktf.stringToTerraform(this._distribution),
      enabled: cdktf.booleanToTerraform(this._enabled),
      external_trunk_base_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalTrunkBaseIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      classification_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._classificationTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution: {
        value: cdktf.stringToHclTerraform(this._distribution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_trunk_base_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalTrunkBaseIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
