// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbZoneServiceGeoLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action for this geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#action GslbZoneServiceGeoLocation#action}
  */
  readonly action?: number;
  /**
  * 'allow': Allow query from this geo-location; 'drop': Drop query from this geo-location; 'forward': Forward packet for this geo-location; 'ignore': Send empty response to this geo-location; 'reject': Send refuse response to this geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#action_type GslbZoneServiceGeoLocation#action_type}
  */
  readonly actionType?: string;
  /**
  * 'both': Forward both query and response; 'query': Forward query from this geo-location; 'response': Forward response to this geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#forward_type GslbZoneServiceGeoLocation#forward_type}
  */
  readonly forwardType?: string;
  /**
  * Specify the geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#geo_name GslbZoneServiceGeoLocation#geo_name}
  */
  readonly geoName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#id GslbZoneServiceGeoLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy for this geo-location (Specify the policy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#policy GslbZoneServiceGeoLocation#policy}
  */
  readonly policy?: string;
  /**
  * ServiceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#service_name GslbZoneServiceGeoLocation#service_name}
  */
  readonly serviceName: string;
  /**
  * ServicePort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#service_port GslbZoneServiceGeoLocation#service_port}
  */
  readonly servicePort: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#user_tag GslbZoneServiceGeoLocation#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#uuid GslbZoneServiceGeoLocation#uuid}
  */
  readonly uuid?: string;
  /**
  * Zone_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#zone_name GslbZoneServiceGeoLocation#zone_name}
  */
  readonly zoneName: string;
  /**
  * alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#alias GslbZoneServiceGeoLocation#alias}
  */
  readonly alias?: GslbZoneServiceGeoLocationAlias[] | cdktf.IResolvable;
}
export interface GslbZoneServiceGeoLocationAlias {
  /**
  * Send CNAME response for this geo-location (Specify a CNAME record)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#alias GslbZoneServiceGeoLocation#alias}
  */
  readonly alias?: string;
}

export function gslbZoneServiceGeoLocationAliasToTerraform(struct?: GslbZoneServiceGeoLocationAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
  }
}


export function gslbZoneServiceGeoLocationAliasToHclTerraform(struct?: GslbZoneServiceGeoLocationAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceGeoLocationAliasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbZoneServiceGeoLocationAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceGeoLocationAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }
}

export class GslbZoneServiceGeoLocationAliasList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceGeoLocationAlias[] | cdktf.IResolvable

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
  public get(index: number): GslbZoneServiceGeoLocationAliasOutputReference {
    return new GslbZoneServiceGeoLocationAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location thunder_gslb_zone_service_geo_location}
*/
export class GslbZoneServiceGeoLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_geo_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbZoneServiceGeoLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbZoneServiceGeoLocation to import
  * @param importFromId The id of the existing GslbZoneServiceGeoLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbZoneServiceGeoLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_geo_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_zone_service_geo_location thunder_gslb_zone_service_geo_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbZoneServiceGeoLocationConfig
  */
  public constructor(scope: Construct, id: string, config: GslbZoneServiceGeoLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_geo_location',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._actionType = config.actionType;
    this._forwardType = config.forwardType;
    this._geoName = config.geoName;
    this._id = config.id;
    this._policy = config.policy;
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._zoneName = config.zoneName;
    this._alias.internalValue = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: number; 
  public get action() {
    return this.getNumberAttribute('action');
  }
  public set action(value: number) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // forward_type - computed: false, optional: true, required: false
  private _forwardType?: string; 
  public get forwardType() {
    return this.getStringAttribute('forward_type');
  }
  public set forwardType(value: string) {
    this._forwardType = value;
  }
  public resetForwardType() {
    this._forwardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTypeInput() {
    return this._forwardType;
  }

  // geo_name - computed: false, optional: false, required: true
  private _geoName?: string; 
  public get geoName() {
    return this.getStringAttribute('geo_name');
  }
  public set geoName(value: string) {
    this._geoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoNameInput() {
    return this._geoName;
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

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: string; 
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
  public set servicePort(value: string) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // alias - computed: false, optional: true, required: false
  private _alias = new GslbZoneServiceGeoLocationAliasList(this, "alias", false);
  public get alias() {
    return this._alias;
  }
  public putAlias(value: GslbZoneServiceGeoLocationAlias[] | cdktf.IResolvable) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.numberToTerraform(this._action),
      action_type: cdktf.stringToTerraform(this._actionType),
      forward_type: cdktf.stringToTerraform(this._forwardType),
      geo_name: cdktf.stringToTerraform(this._geoName),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.stringToTerraform(this._servicePort),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      alias: cdktf.listMapper(gslbZoneServiceGeoLocationAliasToTerraform, true)(this._alias.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.numberToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_type: {
        value: cdktf.stringToHclTerraform(this._forwardType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_name: {
        value: cdktf.stringToHclTerraform(this._geoName),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.stringToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.listMapperHcl(gslbZoneServiceGeoLocationAliasToHclTerraform, true)(this._alias.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceGeoLocationAliasList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
