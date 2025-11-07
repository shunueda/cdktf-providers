// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentTrafficFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ruleset description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#description DeploymentTrafficFilter#description}
  */
  readonly description?: string;
  /**
  * Indicates that the ruleset should be automatically included in new deployments (Defaults to false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#include_by_default DeploymentTrafficFilter#include_by_default}
  */
  readonly includeByDefault?: boolean | cdktf.IResolvable;
  /**
  * Name of the ruleset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#name DeploymentTrafficFilter#name}
  */
  readonly name: string;
  /**
  * Filter region, the ruleset can only be attached to deployments in the specific region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#region DeploymentTrafficFilter#region}
  */
  readonly region: string;
  /**
  * Type of the ruleset. It can be `ip`, `vpce`, `azure_private_endpoint`, or `gcp_private_service_connect_endpoint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#type DeploymentTrafficFilter#type}
  */
  readonly type: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#rule DeploymentTrafficFilter#rule}
  */
  readonly rule?: DeploymentTrafficFilterRule[] | cdktf.IResolvable;
}
export interface DeploymentTrafficFilterRule {
  /**
  * Azure endpoint GUID. Only applicable when the ruleset type is set to `azure_private_endpoint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#azure_endpoint_guid DeploymentTrafficFilter#azure_endpoint_guid}
  */
  readonly azureEndpointGuid?: string;
  /**
  * Azure endpoint name. Only applicable when the ruleset type is set to `azure_private_endpoint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#azure_endpoint_name DeploymentTrafficFilter#azure_endpoint_name}
  */
  readonly azureEndpointName?: string;
  /**
  * Description of this individual rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#description DeploymentTrafficFilter#description}
  */
  readonly description?: string;
  /**
  * Traffic filter source: IP address, CIDR mask, or VPC endpoint ID, **only required** when the type is not `azure_private_endpoint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#source DeploymentTrafficFilter#source}
  */
  readonly source?: string;
}

export function deploymentTrafficFilterRuleToTerraform(struct?: DeploymentTrafficFilterRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_endpoint_guid: cdktf.stringToTerraform(struct!.azureEndpointGuid),
    azure_endpoint_name: cdktf.stringToTerraform(struct!.azureEndpointName),
    description: cdktf.stringToTerraform(struct!.description),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function deploymentTrafficFilterRuleToHclTerraform(struct?: DeploymentTrafficFilterRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_endpoint_guid: {
      value: cdktf.stringToHclTerraform(struct!.azureEndpointGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.azureEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentTrafficFilterRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentTrafficFilterRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureEndpointGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEndpointGuid = this._azureEndpointGuid;
    }
    if (this._azureEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEndpointName = this._azureEndpointName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentTrafficFilterRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureEndpointGuid = undefined;
      this._azureEndpointName = undefined;
      this._description = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureEndpointGuid = value.azureEndpointGuid;
      this._azureEndpointName = value.azureEndpointName;
      this._description = value.description;
      this._source = value.source;
    }
  }

  // azure_endpoint_guid - computed: false, optional: true, required: false
  private _azureEndpointGuid?: string; 
  public get azureEndpointGuid() {
    return this.getStringAttribute('azure_endpoint_guid');
  }
  public set azureEndpointGuid(value: string) {
    this._azureEndpointGuid = value;
  }
  public resetAzureEndpointGuid() {
    this._azureEndpointGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEndpointGuidInput() {
    return this._azureEndpointGuid;
  }

  // azure_endpoint_name - computed: false, optional: true, required: false
  private _azureEndpointName?: string; 
  public get azureEndpointName() {
    return this.getStringAttribute('azure_endpoint_name');
  }
  public set azureEndpointName(value: string) {
    this._azureEndpointName = value;
  }
  public resetAzureEndpointName() {
    this._azureEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEndpointNameInput() {
    return this._azureEndpointName;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DeploymentTrafficFilterRuleList extends cdktf.ComplexList {
  public internalValue? : DeploymentTrafficFilterRule[] | cdktf.IResolvable

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
  public get(index: number): DeploymentTrafficFilterRuleOutputReference {
    return new DeploymentTrafficFilterRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter ec_deployment_traffic_filter}
*/
export class DeploymentTrafficFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_deployment_traffic_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentTrafficFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentTrafficFilter to import
  * @param importFromId The id of the existing DeploymentTrafficFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentTrafficFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_deployment_traffic_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/deployment_traffic_filter ec_deployment_traffic_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentTrafficFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentTrafficFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_deployment_traffic_filter',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2'
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
    this._includeByDefault = config.includeByDefault;
    this._name = config.name;
    this._region = config.region;
    this._type = config.type;
    this._rule.internalValue = config.rule;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_by_default - computed: true, optional: true, required: false
  private _includeByDefault?: boolean | cdktf.IResolvable; 
  public get includeByDefault() {
    return this.getBooleanAttribute('include_by_default');
  }
  public set includeByDefault(value: boolean | cdktf.IResolvable) {
    this._includeByDefault = value;
  }
  public resetIncludeByDefault() {
    this._includeByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeByDefaultInput() {
    return this._includeByDefault;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // rule - computed: false, optional: true, required: false
  private _rule = new DeploymentTrafficFilterRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: DeploymentTrafficFilterRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      include_by_default: cdktf.booleanToTerraform(this._includeByDefault),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      rule: cdktf.listMapper(deploymentTrafficFilterRuleToTerraform, true)(this._rule.internalValue),
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
      include_by_default: {
        value: cdktf.booleanToHclTerraform(this._includeByDefault),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      rule: {
        value: cdktf.listMapperHcl(deploymentTrafficFilterRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeploymentTrafficFilterRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
