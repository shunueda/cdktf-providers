// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaSyntheticsPrivateLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the agent policy associated with the private location. To create a private location for synthetics monitor you need to create an agent policy in fleet and use its agentPolicyId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location#agent_policy_id KibanaSyntheticsPrivateLocation#agent_policy_id}
  */
  readonly agentPolicyId: string;
  /**
  * Geographic coordinates (WGS84) for the location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location#geo KibanaSyntheticsPrivateLocation#geo}
  */
  readonly geo?: KibanaSyntheticsPrivateLocationGeo;
  /**
  * A label for the private location, used as unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location#label KibanaSyntheticsPrivateLocation#label}
  */
  readonly label: string;
  /**
  * An array of tags to categorize the private location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location#tags KibanaSyntheticsPrivateLocation#tags}
  */
  readonly tags?: string[];
}
export interface KibanaSyntheticsPrivateLocationGeo {
  /**
  * The latitude of the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location#lat KibanaSyntheticsPrivateLocation#lat}
  */
  readonly lat: number;
  /**
  * The longitude of the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location#lon KibanaSyntheticsPrivateLocation#lon}
  */
  readonly lon: number;
}

export function kibanaSyntheticsPrivateLocationGeoToTerraform(struct?: KibanaSyntheticsPrivateLocationGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lat: cdktf.numberToTerraform(struct!.lat),
    lon: cdktf.numberToTerraform(struct!.lon),
  }
}


export function kibanaSyntheticsPrivateLocationGeoToHclTerraform(struct?: KibanaSyntheticsPrivateLocationGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lat: {
      value: cdktf.numberToHclTerraform(struct!.lat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lon: {
      value: cdktf.numberToHclTerraform(struct!.lon),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSyntheticsPrivateLocationGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSyntheticsPrivateLocationGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lat = this._lat;
    }
    if (this._lon !== undefined) {
      hasAnyValues = true;
      internalValueResult.lon = this._lon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSyntheticsPrivateLocationGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lat = undefined;
      this._lon = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lat = value.lat;
      this._lon = value.lon;
    }
  }

  // lat - computed: false, optional: false, required: true
  private _lat?: number; 
  public get lat() {
    return this.getNumberAttribute('lat');
  }
  public set lat(value: number) {
    this._lat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latInput() {
    return this._lat;
  }

  // lon - computed: false, optional: false, required: true
  private _lon?: number; 
  public get lon() {
    return this.getNumberAttribute('lon');
  }
  public set lon(value: number) {
    this._lon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lonInput() {
    return this._lon;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location elasticstack_kibana_synthetics_private_location}
*/
export class KibanaSyntheticsPrivateLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_synthetics_private_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaSyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaSyntheticsPrivateLocation to import
  * @param importFromId The id of the existing KibanaSyntheticsPrivateLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaSyntheticsPrivateLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_synthetics_private_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/kibana_synthetics_private_location elasticstack_kibana_synthetics_private_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaSyntheticsPrivateLocationConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaSyntheticsPrivateLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_synthetics_private_location',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentPolicyId = config.agentPolicyId;
    this._geo.internalValue = config.geo;
    this._label = config.label;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_policy_id - computed: false, optional: false, required: true
  private _agentPolicyId?: string; 
  public get agentPolicyId() {
    return this.getStringAttribute('agent_policy_id');
  }
  public set agentPolicyId(value: string) {
    this._agentPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPolicyIdInput() {
    return this._agentPolicyId;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new KibanaSyntheticsPrivateLocationGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }
  public putGeo(value: KibanaSyntheticsPrivateLocationGeo) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_policy_id: cdktf.stringToTerraform(this._agentPolicyId),
      geo: kibanaSyntheticsPrivateLocationGeoToTerraform(this._geo.internalValue),
      label: cdktf.stringToTerraform(this._label),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_policy_id: {
        value: cdktf.stringToHclTerraform(this._agentPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo: {
        value: kibanaSyntheticsPrivateLocationGeoToHclTerraform(this._geo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KibanaSyntheticsPrivateLocationGeo",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
