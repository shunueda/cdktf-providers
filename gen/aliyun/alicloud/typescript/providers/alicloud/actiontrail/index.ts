// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiontrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#data_event_trail_region Actiontrail#data_event_trail_region}
  */
  readonly dataEventTrailRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#event_rw Actiontrail#event_rw}
  */
  readonly eventRw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#event_selectors Actiontrail#event_selectors}
  */
  readonly eventSelectors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#id Actiontrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#is_organization_trail Actiontrail#is_organization_trail}
  */
  readonly isOrganizationTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#max_compute_project_arn Actiontrail#max_compute_project_arn}
  */
  readonly maxComputeProjectArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#max_compute_write_role_arn Actiontrail#max_compute_write_role_arn}
  */
  readonly maxComputeWriteRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#mns_topic_arn Actiontrail#mns_topic_arn}
  */
  readonly mnsTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#name Actiontrail#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#oss_bucket_name Actiontrail#oss_bucket_name}
  */
  readonly ossBucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#oss_key_prefix Actiontrail#oss_key_prefix}
  */
  readonly ossKeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#oss_write_role_arn Actiontrail#oss_write_role_arn}
  */
  readonly ossWriteRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#role_name Actiontrail#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#sls_project_arn Actiontrail#sls_project_arn}
  */
  readonly slsProjectArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#sls_write_role_arn Actiontrail#sls_write_role_arn}
  */
  readonly slsWriteRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#status Actiontrail#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#trail_name Actiontrail#trail_name}
  */
  readonly trailName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#trail_region Actiontrail#trail_region}
  */
  readonly trailRegion?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#timeouts Actiontrail#timeouts}
  */
  readonly timeouts?: ActiontrailTimeouts;
}
export interface ActiontrailTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#create Actiontrail#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#delete Actiontrail#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#update Actiontrail#update}
  */
  readonly update?: string;
}

export function actiontrailTimeoutsToTerraform(struct?: ActiontrailTimeouts | cdktf.IResolvable): any {
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


export function actiontrailTimeoutsToHclTerraform(struct?: ActiontrailTimeouts | cdktf.IResolvable): any {
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

export class ActiontrailTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActiontrailTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiontrailTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail alicloud_actiontrail}
*/
export class Actiontrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_actiontrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Actiontrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Actiontrail to import
  * @param importFromId The id of the existing Actiontrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Actiontrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_actiontrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/actiontrail alicloud_actiontrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiontrailConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ActiontrailConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_actiontrail',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataEventTrailRegion = config.dataEventTrailRegion;
    this._eventRw = config.eventRw;
    this._eventSelectors = config.eventSelectors;
    this._id = config.id;
    this._isOrganizationTrail = config.isOrganizationTrail;
    this._maxComputeProjectArn = config.maxComputeProjectArn;
    this._maxComputeWriteRoleArn = config.maxComputeWriteRoleArn;
    this._mnsTopicArn = config.mnsTopicArn;
    this._name = config.name;
    this._ossBucketName = config.ossBucketName;
    this._ossKeyPrefix = config.ossKeyPrefix;
    this._ossWriteRoleArn = config.ossWriteRoleArn;
    this._roleName = config.roleName;
    this._slsProjectArn = config.slsProjectArn;
    this._slsWriteRoleArn = config.slsWriteRoleArn;
    this._status = config.status;
    this._trailName = config.trailName;
    this._trailRegion = config.trailRegion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_event_trail_region - computed: false, optional: true, required: false
  private _dataEventTrailRegion?: string; 
  public get dataEventTrailRegion() {
    return this.getStringAttribute('data_event_trail_region');
  }
  public set dataEventTrailRegion(value: string) {
    this._dataEventTrailRegion = value;
  }
  public resetDataEventTrailRegion() {
    this._dataEventTrailRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEventTrailRegionInput() {
    return this._dataEventTrailRegion;
  }

  // event_rw - computed: true, optional: true, required: false
  private _eventRw?: string; 
  public get eventRw() {
    return this.getStringAttribute('event_rw');
  }
  public set eventRw(value: string) {
    this._eventRw = value;
  }
  public resetEventRw() {
    this._eventRw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRwInput() {
    return this._eventRw;
  }

  // event_selectors - computed: false, optional: true, required: false
  private _eventSelectors?: string; 
  public get eventSelectors() {
    return this.getStringAttribute('event_selectors');
  }
  public set eventSelectors(value: string) {
    this._eventSelectors = value;
  }
  public resetEventSelectors() {
    this._eventSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSelectorsInput() {
    return this._eventSelectors;
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

  // is_organization_trail - computed: false, optional: true, required: false
  private _isOrganizationTrail?: boolean | cdktf.IResolvable; 
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }
  public set isOrganizationTrail(value: boolean | cdktf.IResolvable) {
    this._isOrganizationTrail = value;
  }
  public resetIsOrganizationTrail() {
    this._isOrganizationTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationTrailInput() {
    return this._isOrganizationTrail;
  }

  // max_compute_project_arn - computed: false, optional: true, required: false
  private _maxComputeProjectArn?: string; 
  public get maxComputeProjectArn() {
    return this.getStringAttribute('max_compute_project_arn');
  }
  public set maxComputeProjectArn(value: string) {
    this._maxComputeProjectArn = value;
  }
  public resetMaxComputeProjectArn() {
    this._maxComputeProjectArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxComputeProjectArnInput() {
    return this._maxComputeProjectArn;
  }

  // max_compute_write_role_arn - computed: true, optional: true, required: false
  private _maxComputeWriteRoleArn?: string; 
  public get maxComputeWriteRoleArn() {
    return this.getStringAttribute('max_compute_write_role_arn');
  }
  public set maxComputeWriteRoleArn(value: string) {
    this._maxComputeWriteRoleArn = value;
  }
  public resetMaxComputeWriteRoleArn() {
    this._maxComputeWriteRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxComputeWriteRoleArnInput() {
    return this._maxComputeWriteRoleArn;
  }

  // mns_topic_arn - computed: false, optional: true, required: false
  private _mnsTopicArn?: string; 
  public get mnsTopicArn() {
    return this.getStringAttribute('mns_topic_arn');
  }
  public set mnsTopicArn(value: string) {
    this._mnsTopicArn = value;
  }
  public resetMnsTopicArn() {
    this._mnsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnsTopicArnInput() {
    return this._mnsTopicArn;
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

  // oss_bucket_name - computed: false, optional: true, required: false
  private _ossBucketName?: string; 
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }
  public set ossBucketName(value: string) {
    this._ossBucketName = value;
  }
  public resetOssBucketName() {
    this._ossBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketNameInput() {
    return this._ossBucketName;
  }

  // oss_key_prefix - computed: false, optional: true, required: false
  private _ossKeyPrefix?: string; 
  public get ossKeyPrefix() {
    return this.getStringAttribute('oss_key_prefix');
  }
  public set ossKeyPrefix(value: string) {
    this._ossKeyPrefix = value;
  }
  public resetOssKeyPrefix() {
    this._ossKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossKeyPrefixInput() {
    return this._ossKeyPrefix;
  }

  // oss_write_role_arn - computed: false, optional: true, required: false
  private _ossWriteRoleArn?: string; 
  public get ossWriteRoleArn() {
    return this.getStringAttribute('oss_write_role_arn');
  }
  public set ossWriteRoleArn(value: string) {
    this._ossWriteRoleArn = value;
  }
  public resetOssWriteRoleArn() {
    this._ossWriteRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossWriteRoleArnInput() {
    return this._ossWriteRoleArn;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // sls_project_arn - computed: false, optional: true, required: false
  private _slsProjectArn?: string; 
  public get slsProjectArn() {
    return this.getStringAttribute('sls_project_arn');
  }
  public set slsProjectArn(value: string) {
    this._slsProjectArn = value;
  }
  public resetSlsProjectArn() {
    this._slsProjectArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsProjectArnInput() {
    return this._slsProjectArn;
  }

  // sls_write_role_arn - computed: true, optional: true, required: false
  private _slsWriteRoleArn?: string; 
  public get slsWriteRoleArn() {
    return this.getStringAttribute('sls_write_role_arn');
  }
  public set slsWriteRoleArn(value: string) {
    this._slsWriteRoleArn = value;
  }
  public resetSlsWriteRoleArn() {
    this._slsWriteRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsWriteRoleArnInput() {
    return this._slsWriteRoleArn;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // trail_name - computed: true, optional: true, required: false
  private _trailName?: string; 
  public get trailName() {
    return this.getStringAttribute('trail_name');
  }
  public set trailName(value: string) {
    this._trailName = value;
  }
  public resetTrailName() {
    this._trailName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailNameInput() {
    return this._trailName;
  }

  // trail_region - computed: true, optional: true, required: false
  private _trailRegion?: string; 
  public get trailRegion() {
    return this.getStringAttribute('trail_region');
  }
  public set trailRegion(value: string) {
    this._trailRegion = value;
  }
  public resetTrailRegion() {
    this._trailRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailRegionInput() {
    return this._trailRegion;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ActiontrailTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ActiontrailTimeouts) {
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
      data_event_trail_region: cdktf.stringToTerraform(this._dataEventTrailRegion),
      event_rw: cdktf.stringToTerraform(this._eventRw),
      event_selectors: cdktf.stringToTerraform(this._eventSelectors),
      id: cdktf.stringToTerraform(this._id),
      is_organization_trail: cdktf.booleanToTerraform(this._isOrganizationTrail),
      max_compute_project_arn: cdktf.stringToTerraform(this._maxComputeProjectArn),
      max_compute_write_role_arn: cdktf.stringToTerraform(this._maxComputeWriteRoleArn),
      mns_topic_arn: cdktf.stringToTerraform(this._mnsTopicArn),
      name: cdktf.stringToTerraform(this._name),
      oss_bucket_name: cdktf.stringToTerraform(this._ossBucketName),
      oss_key_prefix: cdktf.stringToTerraform(this._ossKeyPrefix),
      oss_write_role_arn: cdktf.stringToTerraform(this._ossWriteRoleArn),
      role_name: cdktf.stringToTerraform(this._roleName),
      sls_project_arn: cdktf.stringToTerraform(this._slsProjectArn),
      sls_write_role_arn: cdktf.stringToTerraform(this._slsWriteRoleArn),
      status: cdktf.stringToTerraform(this._status),
      trail_name: cdktf.stringToTerraform(this._trailName),
      trail_region: cdktf.stringToTerraform(this._trailRegion),
      timeouts: actiontrailTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_event_trail_region: {
        value: cdktf.stringToHclTerraform(this._dataEventTrailRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_rw: {
        value: cdktf.stringToHclTerraform(this._eventRw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_selectors: {
        value: cdktf.stringToHclTerraform(this._eventSelectors),
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
      is_organization_trail: {
        value: cdktf.booleanToHclTerraform(this._isOrganizationTrail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_compute_project_arn: {
        value: cdktf.stringToHclTerraform(this._maxComputeProjectArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_compute_write_role_arn: {
        value: cdktf.stringToHclTerraform(this._maxComputeWriteRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._mnsTopicArn),
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
      oss_bucket_name: {
        value: cdktf.stringToHclTerraform(this._ossBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_key_prefix: {
        value: cdktf.stringToHclTerraform(this._ossKeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_write_role_arn: {
        value: cdktf.stringToHclTerraform(this._ossWriteRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_project_arn: {
        value: cdktf.stringToHclTerraform(this._slsProjectArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_write_role_arn: {
        value: cdktf.stringToHclTerraform(this._slsWriteRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trail_name: {
        value: cdktf.stringToHclTerraform(this._trailName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trail_region: {
        value: cdktf.stringToHclTerraform(this._trailRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: actiontrailTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActiontrailTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
