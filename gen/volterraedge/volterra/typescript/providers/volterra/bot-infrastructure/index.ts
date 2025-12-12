// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotInfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#annotations BotInfrastructure#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#description BotInfrastructure#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#disable BotInfrastructure#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#id BotInfrastructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#labels BotInfrastructure#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#name BotInfrastructure#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#namespace BotInfrastructure#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#traffic_type BotInfrastructure#traffic_type}
  */
  readonly trafficType?: string;
  /**
  * create_cloud_hosted block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#create_cloud_hosted BotInfrastructure#create_cloud_hosted}
  */
  readonly createCloudHosted?: BotInfrastructureCreateCloudHosted;
}
export interface BotInfrastructureCreateCloudHostedProduction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#region_1 BotInfrastructure#region_1}
  */
  readonly region1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#region_2 BotInfrastructure#region_2}
  */
  readonly region2: string;
}

export function botInfrastructureCreateCloudHostedProductionToTerraform(struct?: BotInfrastructureCreateCloudHostedProductionOutputReference | BotInfrastructureCreateCloudHostedProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_1: cdktf.stringToTerraform(struct!.region1),
    region_2: cdktf.stringToTerraform(struct!.region2),
  }
}


export function botInfrastructureCreateCloudHostedProductionToHclTerraform(struct?: BotInfrastructureCreateCloudHostedProductionOutputReference | BotInfrastructureCreateCloudHostedProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_1: {
      value: cdktf.stringToHclTerraform(struct!.region1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_2: {
      value: cdktf.stringToHclTerraform(struct!.region2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotInfrastructureCreateCloudHostedProductionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BotInfrastructureCreateCloudHostedProduction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.region1 = this._region1;
    }
    if (this._region2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.region2 = this._region2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotInfrastructureCreateCloudHostedProduction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region1 = undefined;
      this._region2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region1 = value.region1;
      this._region2 = value.region2;
    }
  }

  // region_1 - computed: false, optional: false, required: true
  private _region1?: string; 
  public get region1() {
    return this.getStringAttribute('region_1');
  }
  public set region1(value: string) {
    this._region1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get region1Input() {
    return this._region1;
  }

  // region_2 - computed: false, optional: false, required: true
  private _region2?: string; 
  public get region2() {
    return this.getStringAttribute('region_2');
  }
  public set region2(value: string) {
    this._region2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get region2Input() {
    return this._region2;
  }
}
export interface BotInfrastructureCreateCloudHostedTesting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#region_1 BotInfrastructure#region_1}
  */
  readonly region1: string;
}

export function botInfrastructureCreateCloudHostedTestingToTerraform(struct?: BotInfrastructureCreateCloudHostedTestingOutputReference | BotInfrastructureCreateCloudHostedTesting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_1: cdktf.stringToTerraform(struct!.region1),
  }
}


export function botInfrastructureCreateCloudHostedTestingToHclTerraform(struct?: BotInfrastructureCreateCloudHostedTestingOutputReference | BotInfrastructureCreateCloudHostedTesting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_1: {
      value: cdktf.stringToHclTerraform(struct!.region1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotInfrastructureCreateCloudHostedTestingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BotInfrastructureCreateCloudHostedTesting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.region1 = this._region1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotInfrastructureCreateCloudHostedTesting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region1 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region1 = value.region1;
    }
  }

  // region_1 - computed: false, optional: false, required: true
  private _region1?: string; 
  public get region1() {
    return this.getStringAttribute('region_1');
  }
  public set region1(value: string) {
    this._region1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get region1Input() {
    return this._region1;
  }
}
export interface BotInfrastructureCreateCloudHosted {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#ip_addresses BotInfrastructure#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * production block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#production BotInfrastructure#production}
  */
  readonly production: BotInfrastructureCreateCloudHostedProduction;
  /**
  * testing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#testing BotInfrastructure#testing}
  */
  readonly testing: BotInfrastructureCreateCloudHostedTesting;
}

export function botInfrastructureCreateCloudHostedToTerraform(struct?: BotInfrastructureCreateCloudHostedOutputReference | BotInfrastructureCreateCloudHosted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    production: botInfrastructureCreateCloudHostedProductionToTerraform(struct!.production),
    testing: botInfrastructureCreateCloudHostedTestingToTerraform(struct!.testing),
  }
}


export function botInfrastructureCreateCloudHostedToHclTerraform(struct?: BotInfrastructureCreateCloudHostedOutputReference | BotInfrastructureCreateCloudHosted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    production: {
      value: botInfrastructureCreateCloudHostedProductionToHclTerraform(struct!.production),
      isBlock: true,
      type: "list",
      storageClassType: "BotInfrastructureCreateCloudHostedProductionList",
    },
    testing: {
      value: botInfrastructureCreateCloudHostedTestingToHclTerraform(struct!.testing),
      isBlock: true,
      type: "list",
      storageClassType: "BotInfrastructureCreateCloudHostedTestingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotInfrastructureCreateCloudHostedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BotInfrastructureCreateCloudHosted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._production?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.production = this._production?.internalValue;
    }
    if (this._testing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testing = this._testing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotInfrastructureCreateCloudHosted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddresses = undefined;
      this._production.internalValue = undefined;
      this._testing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddresses = value.ipAddresses;
      this._production.internalValue = value.production;
      this._testing.internalValue = value.testing;
    }
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // production - computed: false, optional: false, required: true
  private _production = new BotInfrastructureCreateCloudHostedProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
  public putProduction(value: BotInfrastructureCreateCloudHostedProduction) {
    this._production.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionInput() {
    return this._production.internalValue;
  }

  // testing - computed: false, optional: false, required: true
  private _testing = new BotInfrastructureCreateCloudHostedTestingOutputReference(this, "testing");
  public get testing() {
    return this._testing;
  }
  public putTesting(value: BotInfrastructureCreateCloudHostedTesting) {
    this._testing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testingInput() {
    return this._testing.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure volterra_bot_infrastructure}
*/
export class BotInfrastructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_bot_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotInfrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotInfrastructure to import
  * @param importFromId The id of the existing BotInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotInfrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_bot_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bot_infrastructure volterra_bot_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotInfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: BotInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_bot_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._trafficType = config.trafficType;
    this._createCloudHosted.internalValue = config.createCloudHosted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // traffic_type - computed: false, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // create_cloud_hosted - computed: false, optional: true, required: false
  private _createCloudHosted = new BotInfrastructureCreateCloudHostedOutputReference(this, "create_cloud_hosted");
  public get createCloudHosted() {
    return this._createCloudHosted;
  }
  public putCreateCloudHosted(value: BotInfrastructureCreateCloudHosted) {
    this._createCloudHosted.internalValue = value;
  }
  public resetCreateCloudHosted() {
    this._createCloudHosted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createCloudHostedInput() {
    return this._createCloudHosted.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      create_cloud_hosted: botInfrastructureCreateCloudHostedToTerraform(this._createCloudHosted.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_cloud_hosted: {
        value: botInfrastructureCreateCloudHostedToHclTerraform(this._createCloudHosted.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BotInfrastructureCreateCloudHostedList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
