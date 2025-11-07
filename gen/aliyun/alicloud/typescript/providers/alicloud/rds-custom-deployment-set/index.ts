// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsCustomDeploymentSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#custom_deployment_set_name RdsCustomDeploymentSet#custom_deployment_set_name}
  */
  readonly customDeploymentSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#description RdsCustomDeploymentSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#group_count RdsCustomDeploymentSet#group_count}
  */
  readonly groupCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#id RdsCustomDeploymentSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#on_unable_to_redeploy_failed_instance RdsCustomDeploymentSet#on_unable_to_redeploy_failed_instance}
  */
  readonly onUnableToRedeployFailedInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#strategy RdsCustomDeploymentSet#strategy}
  */
  readonly strategy?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#timeouts RdsCustomDeploymentSet#timeouts}
  */
  readonly timeouts?: RdsCustomDeploymentSetTimeouts;
}
export interface RdsCustomDeploymentSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#create RdsCustomDeploymentSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#delete RdsCustomDeploymentSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#update RdsCustomDeploymentSet#update}
  */
  readonly update?: string;
}

export function rdsCustomDeploymentSetTimeoutsToTerraform(struct?: RdsCustomDeploymentSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function rdsCustomDeploymentSetTimeoutsToHclTerraform(struct?: RdsCustomDeploymentSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsCustomDeploymentSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsCustomDeploymentSetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsCustomDeploymentSetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set alicloud_rds_custom_deployment_set}
*/
export class RdsCustomDeploymentSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_custom_deployment_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsCustomDeploymentSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsCustomDeploymentSet to import
  * @param importFromId The id of the existing RdsCustomDeploymentSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsCustomDeploymentSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_custom_deployment_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_custom_deployment_set alicloud_rds_custom_deployment_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsCustomDeploymentSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RdsCustomDeploymentSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_custom_deployment_set',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDeploymentSetName = config.customDeploymentSetName;
    this._description = config.description;
    this._groupCount = config.groupCount;
    this._id = config.id;
    this._onUnableToRedeployFailedInstance = config.onUnableToRedeployFailedInstance;
    this._strategy = config.strategy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_deployment_set_name - computed: false, optional: true, required: false
  private _customDeploymentSetName?: string; 
  public get customDeploymentSetName() {
    return this.getStringAttribute('custom_deployment_set_name');
  }
  public set customDeploymentSetName(value: string) {
    this._customDeploymentSetName = value;
  }
  public resetCustomDeploymentSetName() {
    this._customDeploymentSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDeploymentSetNameInput() {
    return this._customDeploymentSetName;
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

  // group_count - computed: false, optional: true, required: false
  private _groupCount?: number; 
  public get groupCount() {
    return this.getNumberAttribute('group_count');
  }
  public set groupCount(value: number) {
    this._groupCount = value;
  }
  public resetGroupCount() {
    this._groupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCountInput() {
    return this._groupCount;
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

  // on_unable_to_redeploy_failed_instance - computed: false, optional: true, required: false
  private _onUnableToRedeployFailedInstance?: string; 
  public get onUnableToRedeployFailedInstance() {
    return this.getStringAttribute('on_unable_to_redeploy_failed_instance');
  }
  public set onUnableToRedeployFailedInstance(value: string) {
    this._onUnableToRedeployFailedInstance = value;
  }
  public resetOnUnableToRedeployFailedInstance() {
    this._onUnableToRedeployFailedInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnableToRedeployFailedInstanceInput() {
    return this._onUnableToRedeployFailedInstance;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsCustomDeploymentSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsCustomDeploymentSetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_deployment_set_name: cdktf.stringToTerraform(this._customDeploymentSetName),
      description: cdktf.stringToTerraform(this._description),
      group_count: cdktf.numberToTerraform(this._groupCount),
      id: cdktf.stringToTerraform(this._id),
      on_unable_to_redeploy_failed_instance: cdktf.stringToTerraform(this._onUnableToRedeployFailedInstance),
      strategy: cdktf.stringToTerraform(this._strategy),
      timeouts: rdsCustomDeploymentSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_deployment_set_name: {
        value: cdktf.stringToHclTerraform(this._customDeploymentSetName),
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
      group_count: {
        value: cdktf.numberToHclTerraform(this._groupCount),
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
      on_unable_to_redeploy_failed_instance: {
        value: cdktf.stringToHclTerraform(this._onUnableToRedeployFailedInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: rdsCustomDeploymentSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsCustomDeploymentSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
