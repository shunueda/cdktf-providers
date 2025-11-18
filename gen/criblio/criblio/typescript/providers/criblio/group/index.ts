// https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#cloud Group#cloud}
  */
  readonly cloud?: GroupCloud;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#estimated_ingest_rate Group#estimated_ingest_rate}
  */
  readonly estimatedIngestRate?: number;
  /**
  * Group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#is_fleet Group#is_fleet}
  */
  readonly isFleet?: boolean | cdktf.IResolvable;
  /**
  * This is only configurable for hybrid worker groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#max_worker_age Group#max_worker_age}
  */
  readonly maxWorkerAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#name Group#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#on_prem Group#on_prem}
  */
  readonly onPrem?: boolean | cdktf.IResolvable;
  /**
  * Cribl Product. must be one of ["stream", "edge"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#product Group#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#provisioned Group#provisioned}
  */
  readonly provisioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#streamtags Group#streamtags}
  */
  readonly streamtags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#tags Group#tags}
  */
  readonly tags?: string;
  /**
  * must be "lake_access"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#type Group#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#worker_remote_access Group#worker_remote_access}
  */
  readonly workerRemoteAccess?: boolean | cdktf.IResolvable;
}
export interface GroupCloud {
  /**
  * must be one of ["aws", "azure"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#provider Group#provider}
  */
  readonly provider?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#region Group#region}
  */
  readonly region?: string;
}

export function groupCloudToTerraform(struct?: GroupCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function groupCloudToHclTerraform(struct?: GroupCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._region = value.region;
    }
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group criblio_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/group criblio_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_group',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.23',
        providerVersionConstraint: '1.20.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud.internalValue = config.cloud;
    this._description = config.description;
    this._estimatedIngestRate = config.estimatedIngestRate;
    this._id = config.id;
    this._isFleet = config.isFleet;
    this._maxWorkerAge = config.maxWorkerAge;
    this._name = config.name;
    this._onPrem = config.onPrem;
    this._product = config.product;
    this._provisioned = config.provisioned;
    this._streamtags = config.streamtags;
    this._tags = config.tags;
    this._type = config.type;
    this._workerRemoteAccess = config.workerRemoteAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud - computed: true, optional: true, required: false
  private _cloud = new GroupCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: GroupCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

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

  // estimated_ingest_rate - computed: true, optional: true, required: false
  private _estimatedIngestRate?: number; 
  public get estimatedIngestRate() {
    return this.getNumberAttribute('estimated_ingest_rate');
  }
  public set estimatedIngestRate(value: number) {
    this._estimatedIngestRate = value;
  }
  public resetEstimatedIngestRate() {
    this._estimatedIngestRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedIngestRateInput() {
    return this._estimatedIngestRate;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_fleet - computed: true, optional: true, required: false
  private _isFleet?: boolean | cdktf.IResolvable; 
  public get isFleet() {
    return this.getBooleanAttribute('is_fleet');
  }
  public set isFleet(value: boolean | cdktf.IResolvable) {
    this._isFleet = value;
  }
  public resetIsFleet() {
    this._isFleet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFleetInput() {
    return this._isFleet;
  }

  // max_worker_age - computed: true, optional: true, required: false
  private _maxWorkerAge?: string; 
  public get maxWorkerAge() {
    return this.getStringAttribute('max_worker_age');
  }
  public set maxWorkerAge(value: string) {
    this._maxWorkerAge = value;
  }
  public resetMaxWorkerAge() {
    this._maxWorkerAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerAgeInput() {
    return this._maxWorkerAge;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_prem - computed: true, optional: true, required: false
  private _onPrem?: boolean | cdktf.IResolvable; 
  public get onPrem() {
    return this.getBooleanAttribute('on_prem');
  }
  public set onPrem(value: boolean | cdktf.IResolvable) {
    this._onPrem = value;
  }
  public resetOnPrem() {
    this._onPrem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremInput() {
    return this._onPrem;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // provisioned - computed: true, optional: true, required: false
  private _provisioned?: boolean | cdktf.IResolvable; 
  public get provisioned() {
    return this.getBooleanAttribute('provisioned');
  }
  public set provisioned(value: boolean | cdktf.IResolvable) {
    this._provisioned = value;
  }
  public resetProvisioned() {
    this._provisioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedInput() {
    return this._provisioned;
  }

  // streamtags - computed: true, optional: true, required: false
  private _streamtags?: string[]; 
  public get streamtags() {
    return this.getListAttribute('streamtags');
  }
  public set streamtags(value: string[]) {
    this._streamtags = value;
  }
  public resetStreamtags() {
    this._streamtags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamtagsInput() {
    return this._streamtags;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
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

  // worker_remote_access - computed: true, optional: true, required: false
  private _workerRemoteAccess?: boolean | cdktf.IResolvable; 
  public get workerRemoteAccess() {
    return this.getBooleanAttribute('worker_remote_access');
  }
  public set workerRemoteAccess(value: boolean | cdktf.IResolvable) {
    this._workerRemoteAccess = value;
  }
  public resetWorkerRemoteAccess() {
    this._workerRemoteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerRemoteAccessInput() {
    return this._workerRemoteAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: groupCloudToTerraform(this._cloud.internalValue),
      description: cdktf.stringToTerraform(this._description),
      estimated_ingest_rate: cdktf.numberToTerraform(this._estimatedIngestRate),
      id: cdktf.stringToTerraform(this._id),
      is_fleet: cdktf.booleanToTerraform(this._isFleet),
      max_worker_age: cdktf.stringToTerraform(this._maxWorkerAge),
      name: cdktf.stringToTerraform(this._name),
      on_prem: cdktf.booleanToTerraform(this._onPrem),
      product: cdktf.stringToTerraform(this._product),
      provisioned: cdktf.booleanToTerraform(this._provisioned),
      streamtags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streamtags),
      tags: cdktf.stringToTerraform(this._tags),
      type: cdktf.stringToTerraform(this._type),
      worker_remote_access: cdktf.booleanToTerraform(this._workerRemoteAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: groupCloudToHclTerraform(this._cloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupCloud",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      estimated_ingest_rate: {
        value: cdktf.numberToHclTerraform(this._estimatedIngestRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_fleet: {
        value: cdktf.booleanToHclTerraform(this._isFleet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_worker_age: {
        value: cdktf.stringToHclTerraform(this._maxWorkerAge),
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
      on_prem: {
        value: cdktf.booleanToHclTerraform(this._onPrem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned: {
        value: cdktf.booleanToHclTerraform(this._provisioned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      streamtags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._streamtags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
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
      worker_remote_access: {
        value: cdktf.booleanToHclTerraform(this._workerRemoteAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
