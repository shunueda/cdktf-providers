// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaScheduledPreloadJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#id EsaScheduledPreloadJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#insert_way EsaScheduledPreloadJob#insert_way}
  */
  readonly insertWay: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#oss_url EsaScheduledPreloadJob#oss_url}
  */
  readonly ossUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#scheduled_preload_job_name EsaScheduledPreloadJob#scheduled_preload_job_name}
  */
  readonly scheduledPreloadJobName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#site_id EsaScheduledPreloadJob#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#url_list EsaScheduledPreloadJob#url_list}
  */
  readonly urlList?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#timeouts EsaScheduledPreloadJob#timeouts}
  */
  readonly timeouts?: EsaScheduledPreloadJobTimeouts;
}
export interface EsaScheduledPreloadJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#create EsaScheduledPreloadJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#delete EsaScheduledPreloadJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#update EsaScheduledPreloadJob#update}
  */
  readonly update?: string;
}

export function esaScheduledPreloadJobTimeoutsToTerraform(struct?: EsaScheduledPreloadJobTimeouts | cdktf.IResolvable): any {
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


export function esaScheduledPreloadJobTimeoutsToHclTerraform(struct?: EsaScheduledPreloadJobTimeouts | cdktf.IResolvable): any {
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

export class EsaScheduledPreloadJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaScheduledPreloadJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaScheduledPreloadJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job alicloud_esa_scheduled_preload_job}
*/
export class EsaScheduledPreloadJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_scheduled_preload_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaScheduledPreloadJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaScheduledPreloadJob to import
  * @param importFromId The id of the existing EsaScheduledPreloadJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaScheduledPreloadJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_scheduled_preload_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_scheduled_preload_job alicloud_esa_scheduled_preload_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaScheduledPreloadJobConfig
  */
  public constructor(scope: Construct, id: string, config: EsaScheduledPreloadJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_scheduled_preload_job',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._insertWay = config.insertWay;
    this._ossUrl = config.ossUrl;
    this._scheduledPreloadJobName = config.scheduledPreloadJobName;
    this._siteId = config.siteId;
    this._urlList = config.urlList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // insert_way - computed: false, optional: false, required: true
  private _insertWay?: string; 
  public get insertWay() {
    return this.getStringAttribute('insert_way');
  }
  public set insertWay(value: string) {
    this._insertWay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertWayInput() {
    return this._insertWay;
  }

  // oss_url - computed: false, optional: true, required: false
  private _ossUrl?: string; 
  public get ossUrl() {
    return this.getStringAttribute('oss_url');
  }
  public set ossUrl(value: string) {
    this._ossUrl = value;
  }
  public resetOssUrl() {
    this._ossUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossUrlInput() {
    return this._ossUrl;
  }

  // scheduled_preload_job_id - computed: true, optional: false, required: false
  public get scheduledPreloadJobId() {
    return this.getStringAttribute('scheduled_preload_job_id');
  }

  // scheduled_preload_job_name - computed: false, optional: false, required: true
  private _scheduledPreloadJobName?: string; 
  public get scheduledPreloadJobName() {
    return this.getStringAttribute('scheduled_preload_job_name');
  }
  public set scheduledPreloadJobName(value: string) {
    this._scheduledPreloadJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledPreloadJobNameInput() {
    return this._scheduledPreloadJobName;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // url_list - computed: false, optional: true, required: false
  private _urlList?: string; 
  public get urlList() {
    return this.getStringAttribute('url_list');
  }
  public set urlList(value: string) {
    this._urlList = value;
  }
  public resetUrlList() {
    this._urlList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlListInput() {
    return this._urlList;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaScheduledPreloadJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaScheduledPreloadJobTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      insert_way: cdktf.stringToTerraform(this._insertWay),
      oss_url: cdktf.stringToTerraform(this._ossUrl),
      scheduled_preload_job_name: cdktf.stringToTerraform(this._scheduledPreloadJobName),
      site_id: cdktf.stringToTerraform(this._siteId),
      url_list: cdktf.stringToTerraform(this._urlList),
      timeouts: esaScheduledPreloadJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_way: {
        value: cdktf.stringToHclTerraform(this._insertWay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_url: {
        value: cdktf.stringToHclTerraform(this._ossUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_preload_job_name: {
        value: cdktf.stringToHclTerraform(this._scheduledPreloadJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_list: {
        value: cdktf.stringToHclTerraform(this._urlList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: esaScheduledPreloadJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaScheduledPreloadJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
