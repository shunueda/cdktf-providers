// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#description SchemaTemplateVrf#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#display_name SchemaTemplateVrf#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#id SchemaTemplateVrf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#ip_data_plane_learning SchemaTemplateVrf#ip_data_plane_learning}
  */
  readonly ipDataPlaneLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#layer3_multicast SchemaTemplateVrf#layer3_multicast}
  */
  readonly layer3Multicast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#name SchemaTemplateVrf#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#preferred_group SchemaTemplateVrf#preferred_group}
  */
  readonly preferredGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#schema_id SchemaTemplateVrf#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#site_aware_policy_enforcement SchemaTemplateVrf#site_aware_policy_enforcement}
  */
  readonly siteAwarePolicyEnforcement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#template SchemaTemplateVrf#template}
  */
  readonly template: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#vzany SchemaTemplateVrf#vzany}
  */
  readonly vzany?: boolean | cdktf.IResolvable;
  /**
  * rendezvous_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#rendezvous_points SchemaTemplateVrf#rendezvous_points}
  */
  readonly rendezvousPoints?: SchemaTemplateVrfRendezvousPoints[] | cdktf.IResolvable;
}
export interface SchemaTemplateVrfRendezvousPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#ip_address SchemaTemplateVrf#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#route_map_policy_multicast_uuid SchemaTemplateVrf#route_map_policy_multicast_uuid}
  */
  readonly routeMapPolicyMulticastUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#type SchemaTemplateVrf#type}
  */
  readonly type: string;
}

export function schemaTemplateVrfRendezvousPointsToTerraform(struct?: SchemaTemplateVrfRendezvousPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    route_map_policy_multicast_uuid: cdktf.stringToTerraform(struct!.routeMapPolicyMulticastUuid),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function schemaTemplateVrfRendezvousPointsToHclTerraform(struct?: SchemaTemplateVrfRendezvousPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_policy_multicast_uuid: {
      value: cdktf.stringToHclTerraform(struct!.routeMapPolicyMulticastUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaTemplateVrfRendezvousPointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SchemaTemplateVrfRendezvousPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._routeMapPolicyMulticastUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapPolicyMulticastUuid = this._routeMapPolicyMulticastUuid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaTemplateVrfRendezvousPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._routeMapPolicyMulticastUuid = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._routeMapPolicyMulticastUuid = value.routeMapPolicyMulticastUuid;
      this._type = value.type;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // route_map_policy_multicast_uuid - computed: true, optional: true, required: false
  private _routeMapPolicyMulticastUuid?: string; 
  public get routeMapPolicyMulticastUuid() {
    return this.getStringAttribute('route_map_policy_multicast_uuid');
  }
  public set routeMapPolicyMulticastUuid(value: string) {
    this._routeMapPolicyMulticastUuid = value;
  }
  public resetRouteMapPolicyMulticastUuid() {
    this._routeMapPolicyMulticastUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapPolicyMulticastUuidInput() {
    return this._routeMapPolicyMulticastUuid;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SchemaTemplateVrfRendezvousPointsList extends cdktf.ComplexList {
  public internalValue? : SchemaTemplateVrfRendezvousPoints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SchemaTemplateVrfRendezvousPointsOutputReference {
    return new SchemaTemplateVrfRendezvousPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf mso_schema_template_vrf}
*/
export class SchemaTemplateVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateVrf to import
  * @param importFromId The id of the existing SchemaTemplateVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_template_vrf mso_schema_template_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateVrfConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_vrf',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipDataPlaneLearning = config.ipDataPlaneLearning;
    this._layer3Multicast = config.layer3Multicast;
    this._name = config.name;
    this._preferredGroup = config.preferredGroup;
    this._schemaId = config.schemaId;
    this._siteAwarePolicyEnforcement = config.siteAwarePolicyEnforcement;
    this._template = config.template;
    this._vzany = config.vzany;
    this._rendezvousPoints.internalValue = config.rendezvousPoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ip_data_plane_learning - computed: true, optional: true, required: false
  private _ipDataPlaneLearning?: string; 
  public get ipDataPlaneLearning() {
    return this.getStringAttribute('ip_data_plane_learning');
  }
  public set ipDataPlaneLearning(value: string) {
    this._ipDataPlaneLearning = value;
  }
  public resetIpDataPlaneLearning() {
    this._ipDataPlaneLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDataPlaneLearningInput() {
    return this._ipDataPlaneLearning;
  }

  // layer3_multicast - computed: true, optional: true, required: false
  private _layer3Multicast?: boolean | cdktf.IResolvable; 
  public get layer3Multicast() {
    return this.getBooleanAttribute('layer3_multicast');
  }
  public set layer3Multicast(value: boolean | cdktf.IResolvable) {
    this._layer3Multicast = value;
  }
  public resetLayer3Multicast() {
    this._layer3Multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3MulticastInput() {
    return this._layer3Multicast;
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

  // preferred_group - computed: true, optional: true, required: false
  private _preferredGroup?: boolean | cdktf.IResolvable; 
  public get preferredGroup() {
    return this.getBooleanAttribute('preferred_group');
  }
  public set preferredGroup(value: boolean | cdktf.IResolvable) {
    this._preferredGroup = value;
  }
  public resetPreferredGroup() {
    this._preferredGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredGroupInput() {
    return this._preferredGroup;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // site_aware_policy_enforcement - computed: true, optional: true, required: false
  private _siteAwarePolicyEnforcement?: boolean | cdktf.IResolvable; 
  public get siteAwarePolicyEnforcement() {
    return this.getBooleanAttribute('site_aware_policy_enforcement');
  }
  public set siteAwarePolicyEnforcement(value: boolean | cdktf.IResolvable) {
    this._siteAwarePolicyEnforcement = value;
  }
  public resetSiteAwarePolicyEnforcement() {
    this._siteAwarePolicyEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAwarePolicyEnforcementInput() {
    return this._siteAwarePolicyEnforcement;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vzany - computed: true, optional: true, required: false
  private _vzany?: boolean | cdktf.IResolvable; 
  public get vzany() {
    return this.getBooleanAttribute('vzany');
  }
  public set vzany(value: boolean | cdktf.IResolvable) {
    this._vzany = value;
  }
  public resetVzany() {
    this._vzany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vzanyInput() {
    return this._vzany;
  }

  // rendezvous_points - computed: false, optional: true, required: false
  private _rendezvousPoints = new SchemaTemplateVrfRendezvousPointsList(this, "rendezvous_points", true);
  public get rendezvousPoints() {
    return this._rendezvousPoints;
  }
  public putRendezvousPoints(value: SchemaTemplateVrfRendezvousPoints[] | cdktf.IResolvable) {
    this._rendezvousPoints.internalValue = value;
  }
  public resetRendezvousPoints() {
    this._rendezvousPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rendezvousPointsInput() {
    return this._rendezvousPoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ip_data_plane_learning: cdktf.stringToTerraform(this._ipDataPlaneLearning),
      layer3_multicast: cdktf.booleanToTerraform(this._layer3Multicast),
      name: cdktf.stringToTerraform(this._name),
      preferred_group: cdktf.booleanToTerraform(this._preferredGroup),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_aware_policy_enforcement: cdktf.booleanToTerraform(this._siteAwarePolicyEnforcement),
      template: cdktf.stringToTerraform(this._template),
      vzany: cdktf.booleanToTerraform(this._vzany),
      rendezvous_points: cdktf.listMapper(schemaTemplateVrfRendezvousPointsToTerraform, true)(this._rendezvousPoints.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      ip_data_plane_learning: {
        value: cdktf.stringToHclTerraform(this._ipDataPlaneLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer3_multicast: {
        value: cdktf.booleanToHclTerraform(this._layer3Multicast),
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
      preferred_group: {
        value: cdktf.booleanToHclTerraform(this._preferredGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_aware_policy_enforcement: {
        value: cdktf.booleanToHclTerraform(this._siteAwarePolicyEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vzany: {
        value: cdktf.booleanToHclTerraform(this._vzany),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rendezvous_points: {
        value: cdktf.listMapperHcl(schemaTemplateVrfRendezvousPointsToHclTerraform, true)(this._rendezvousPoints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SchemaTemplateVrfRendezvousPointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
