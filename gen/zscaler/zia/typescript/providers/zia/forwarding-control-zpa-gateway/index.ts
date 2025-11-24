// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingControlZpaGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional details about the ZPA gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#description ForwardingControlZpaGateway#description}
  */
  readonly description?: string;
  /**
  * The name of the ZPA gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#name ForwardingControlZpaGateway#name}
  */
  readonly name: string;
  /**
  * Indicates whether the ZPA gateway is configured for Zscaler Internet Access (using option ZPA) or Zscaler Cloud Connector (using option ECZPA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#type ForwardingControlZpaGateway#type}
  */
  readonly type?: string;
  /**
  * zpa_app_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#zpa_app_segments ForwardingControlZpaGateway#zpa_app_segments}
  */
  readonly zpaAppSegments?: ForwardingControlZpaGatewayZpaAppSegments[] | cdktf.IResolvable;
  /**
  * zpa_server_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#zpa_server_group ForwardingControlZpaGateway#zpa_server_group}
  */
  readonly zpaServerGroup: ForwardingControlZpaGatewayZpaServerGroup;
}
export interface ForwardingControlZpaGatewayZpaAppSegments {
  /**
  * External ID of the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#external_id ForwardingControlZpaGateway#external_id}
  */
  readonly externalId: string;
  /**
  * Name of the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#name ForwardingControlZpaGateway#name}
  */
  readonly name: string;
}

export function forwardingControlZpaGatewayZpaAppSegmentsToTerraform(struct?: ForwardingControlZpaGatewayZpaAppSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function forwardingControlZpaGatewayZpaAppSegmentsToHclTerraform(struct?: ForwardingControlZpaGatewayZpaAppSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingControlZpaGatewayZpaAppSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ForwardingControlZpaGatewayZpaAppSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlZpaGatewayZpaAppSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._name = value.name;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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
}

export class ForwardingControlZpaGatewayZpaAppSegmentsList extends cdktf.ComplexList {
  public internalValue? : ForwardingControlZpaGatewayZpaAppSegments[] | cdktf.IResolvable

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
  public get(index: number): ForwardingControlZpaGatewayZpaAppSegmentsOutputReference {
    return new ForwardingControlZpaGatewayZpaAppSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ForwardingControlZpaGatewayZpaServerGroup {
  /**
  * ID of the ZPA Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#external_id ForwardingControlZpaGateway#external_id}
  */
  readonly externalId: string;
  /**
  * Name of the ZPA Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#name ForwardingControlZpaGateway#name}
  */
  readonly name: string;
}

export function forwardingControlZpaGatewayZpaServerGroupToTerraform(struct?: ForwardingControlZpaGatewayZpaServerGroupOutputReference | ForwardingControlZpaGatewayZpaServerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function forwardingControlZpaGatewayZpaServerGroupToHclTerraform(struct?: ForwardingControlZpaGatewayZpaServerGroupOutputReference | ForwardingControlZpaGatewayZpaServerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ForwardingControlZpaGatewayZpaServerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ForwardingControlZpaGatewayZpaServerGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ForwardingControlZpaGatewayZpaServerGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._name = value.name;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway zia_forwarding_control_zpa_gateway}
*/
export class ForwardingControlZpaGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_forwarding_control_zpa_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingControlZpaGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingControlZpaGateway to import
  * @param importFromId The id of the existing ForwardingControlZpaGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingControlZpaGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_forwarding_control_zpa_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/forwarding_control_zpa_gateway zia_forwarding_control_zpa_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingControlZpaGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardingControlZpaGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_forwarding_control_zpa_gateway',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
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
    this._name = config.name;
    this._type = config.type;
    this._zpaAppSegments.internalValue = config.zpaAppSegments;
    this._zpaServerGroup.internalValue = config.zpaServerGroup;
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

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getNumberAttribute('gateway_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zpa_app_segments - computed: false, optional: true, required: false
  private _zpaAppSegments = new ForwardingControlZpaGatewayZpaAppSegmentsList(this, "zpa_app_segments", true);
  public get zpaAppSegments() {
    return this._zpaAppSegments;
  }
  public putZpaAppSegments(value: ForwardingControlZpaGatewayZpaAppSegments[] | cdktf.IResolvable) {
    this._zpaAppSegments.internalValue = value;
  }
  public resetZpaAppSegments() {
    this._zpaAppSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaAppSegmentsInput() {
    return this._zpaAppSegments.internalValue;
  }

  // zpa_server_group - computed: false, optional: false, required: true
  private _zpaServerGroup = new ForwardingControlZpaGatewayZpaServerGroupOutputReference(this, "zpa_server_group");
  public get zpaServerGroup() {
    return this._zpaServerGroup;
  }
  public putZpaServerGroup(value: ForwardingControlZpaGatewayZpaServerGroup) {
    this._zpaServerGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaServerGroupInput() {
    return this._zpaServerGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      zpa_app_segments: cdktf.listMapper(forwardingControlZpaGatewayZpaAppSegmentsToTerraform, true)(this._zpaAppSegments.internalValue),
      zpa_server_group: forwardingControlZpaGatewayZpaServerGroupToTerraform(this._zpaServerGroup.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zpa_app_segments: {
        value: cdktf.listMapperHcl(forwardingControlZpaGatewayZpaAppSegmentsToHclTerraform, true)(this._zpaAppSegments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ForwardingControlZpaGatewayZpaAppSegmentsList",
      },
      zpa_server_group: {
        value: forwardingControlZpaGatewayZpaServerGroupToHclTerraform(this._zpaServerGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ForwardingControlZpaGatewayZpaServerGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
