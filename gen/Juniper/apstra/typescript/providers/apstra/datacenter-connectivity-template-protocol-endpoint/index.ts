// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterConnectivityTemplateProtocolEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint#blueprint_id DatacenterConnectivityTemplateProtocolEndpoint#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Connectivity Template Description displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint#description DatacenterConnectivityTemplateProtocolEndpoint#description}
  */
  readonly description?: string;
  /**
  * Connectivity Template Name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint#name DatacenterConnectivityTemplateProtocolEndpoint#name}
  */
  readonly name: string;
  /**
  * Map of Routing Policy Primitives to be used with this *Protocol Endpoint*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint#routing_policies DatacenterConnectivityTemplateProtocolEndpoint#routing_policies}
  */
  readonly routingPolicies?: { [key: string]: DatacenterConnectivityTemplateProtocolEndpointRoutingPolicies } | cdktf.IResolvable;
  /**
  * Set of Tags associated with this Connectivity Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint#tags DatacenterConnectivityTemplateProtocolEndpoint#tags}
  */
  readonly tags?: string[];
}
export interface DatacenterConnectivityTemplateProtocolEndpointRoutingPolicies {
  /**
  * Routing Policy ID to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint#routing_policy_id DatacenterConnectivityTemplateProtocolEndpoint#routing_policy_id}
  */
  readonly routingPolicyId: string;
}

export function datacenterConnectivityTemplateProtocolEndpointRoutingPoliciesToTerraform(struct?: DatacenterConnectivityTemplateProtocolEndpointRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_policy_id: cdktf.stringToTerraform(struct!.routingPolicyId),
  }
}


export function datacenterConnectivityTemplateProtocolEndpointRoutingPoliciesToHclTerraform(struct?: DatacenterConnectivityTemplateProtocolEndpointRoutingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routingPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterConnectivityTemplateProtocolEndpointRoutingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterConnectivityTemplateProtocolEndpointRoutingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicyId = this._routingPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterConnectivityTemplateProtocolEndpointRoutingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingPolicyId = value.routingPolicyId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // routing_policy_id - computed: false, optional: false, required: true
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }
}

export class DatacenterConnectivityTemplateProtocolEndpointRoutingPoliciesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterConnectivityTemplateProtocolEndpointRoutingPolicies } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterConnectivityTemplateProtocolEndpointRoutingPoliciesOutputReference {
    return new DatacenterConnectivityTemplateProtocolEndpointRoutingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint apstra_datacenter_connectivity_template_protocol_endpoint}
*/
export class DatacenterConnectivityTemplateProtocolEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_connectivity_template_protocol_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterConnectivityTemplateProtocolEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterConnectivityTemplateProtocolEndpoint to import
  * @param importFromId The id of the existing DatacenterConnectivityTemplateProtocolEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterConnectivityTemplateProtocolEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_connectivity_template_protocol_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_connectivity_template_protocol_endpoint apstra_datacenter_connectivity_template_protocol_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterConnectivityTemplateProtocolEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterConnectivityTemplateProtocolEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_connectivity_template_protocol_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._description = config.description;
    this._name = config.name;
    this._routingPolicies.internalValue = config.routingPolicies;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
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

  // routing_policies - computed: false, optional: true, required: false
  private _routingPolicies = new DatacenterConnectivityTemplateProtocolEndpointRoutingPoliciesMap(this, "routing_policies");
  public get routingPolicies() {
    return this._routingPolicies;
  }
  public putRoutingPolicies(value: { [key: string]: DatacenterConnectivityTemplateProtocolEndpointRoutingPolicies } | cdktf.IResolvable) {
    this._routingPolicies.internalValue = value;
  }
  public resetRoutingPolicies() {
    this._routingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPoliciesInput() {
    return this._routingPolicies.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      routing_policies: cdktf.hashMapper(datacenterConnectivityTemplateProtocolEndpointRoutingPoliciesToTerraform)(this._routingPolicies.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_policies: {
        value: cdktf.hashMapperHcl(datacenterConnectivityTemplateProtocolEndpointRoutingPoliciesToHclTerraform)(this._routingPolicies.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterConnectivityTemplateProtocolEndpointRoutingPoliciesMap",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
