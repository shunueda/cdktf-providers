// https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectRedshiftConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#description DirectRedshift#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#display_name DirectRedshift#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#id DirectRedshift#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * [Logs documentation](https://docs.nobl9.com/features/slo-troubleshooting/event-logs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#log_collection_enabled DirectRedshift#log_collection_enabled}
  */
  readonly logCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#name DirectRedshift#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#project DirectRedshift#project}
  */
  readonly project: string;
  /**
  * Release channel of the created data source [stable/beta]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#release_channel DirectRedshift#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * [required] | ARN of the AWS IAM Role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#role_arn DirectRedshift#role_arn}
  */
  readonly roleArn?: string;
  /**
  * AWS Secret ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#secret_arn DirectRedshift#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * This value indicated whether the field was a source of metrics and/or services. 'source_of' is deprecated and not used anywhere; however, it's kept for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#source_of DirectRedshift#source_of}
  */
  readonly sourceOf?: string[];
  /**
  * query_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#query_delay DirectRedshift#query_delay}
  */
  readonly queryDelay?: DirectRedshiftQueryDelay;
}
export interface DirectRedshiftQueryDelay {
  /**
  * Must be one of Minute or Second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#unit DirectRedshift#unit}
  */
  readonly unit: string;
  /**
  * Must be an integer greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#value DirectRedshift#value}
  */
  readonly value: number;
}

export function directRedshiftQueryDelayToTerraform(struct?: DirectRedshiftQueryDelayOutputReference | DirectRedshiftQueryDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function directRedshiftQueryDelayToHclTerraform(struct?: DirectRedshiftQueryDelayOutputReference | DirectRedshiftQueryDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectRedshiftQueryDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DirectRedshiftQueryDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectRedshiftQueryDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift nobl9_direct_redshift}
*/
export class DirectRedshift extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_direct_redshift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectRedshift resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectRedshift to import
  * @param importFromId The id of the existing DirectRedshift that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectRedshift to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_direct_redshift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/direct_redshift nobl9_direct_redshift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectRedshiftConfig
  */
  public constructor(scope: Construct, id: string, config: DirectRedshiftConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_direct_redshift',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.44.1'
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
    this._logCollectionEnabled = config.logCollectionEnabled;
    this._name = config.name;
    this._project = config.project;
    this._releaseChannel = config.releaseChannel;
    this._roleArn = config.roleArn;
    this._secretArn = config.secretArn;
    this._sourceOf = config.sourceOf;
    this._queryDelay.internalValue = config.queryDelay;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // log_collection_enabled - computed: false, optional: true, required: false
  private _logCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get logCollectionEnabled() {
    return this.getBooleanAttribute('log_collection_enabled');
  }
  public set logCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._logCollectionEnabled = value;
  }
  public resetLogCollectionEnabled() {
    this._logCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionEnabledInput() {
    return this._logCollectionEnabled;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // release_channel - computed: true, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // source_of - computed: false, optional: true, required: false
  private _sourceOf?: string[]; 
  public get sourceOf() {
    return this.getListAttribute('source_of');
  }
  public set sourceOf(value: string[]) {
    this._sourceOf = value;
  }
  public resetSourceOf() {
    this._sourceOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOfInput() {
    return this._sourceOf;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // query_delay - computed: false, optional: true, required: false
  private _queryDelay = new DirectRedshiftQueryDelayOutputReference(this, "query_delay");
  public get queryDelay() {
    return this._queryDelay;
  }
  public putQueryDelay(value: DirectRedshiftQueryDelay) {
    this._queryDelay.internalValue = value;
  }
  public resetQueryDelay() {
    this._queryDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDelayInput() {
    return this._queryDelay.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      log_collection_enabled: cdktf.booleanToTerraform(this._logCollectionEnabled),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      secret_arn: cdktf.stringToTerraform(this._secretArn),
      source_of: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceOf),
      query_delay: directRedshiftQueryDelayToTerraform(this._queryDelay.internalValue),
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
      log_collection_enabled: {
        value: cdktf.booleanToHclTerraform(this._logCollectionEnabled),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_channel: {
        value: cdktf.stringToHclTerraform(this._releaseChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_arn: {
        value: cdktf.stringToHclTerraform(this._secretArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_of: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceOf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      query_delay: {
        value: directRedshiftQueryDelayToHclTerraform(this._queryDelay.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DirectRedshiftQueryDelayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
