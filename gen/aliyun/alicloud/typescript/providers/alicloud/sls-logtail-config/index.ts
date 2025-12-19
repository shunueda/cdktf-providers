// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlsLogtailConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#create_time SlsLogtailConfig#create_time}
  */
  readonly createTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#id SlsLogtailConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#input_detail SlsLogtailConfig#input_detail}
  */
  readonly inputDetail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#input_type SlsLogtailConfig#input_type}
  */
  readonly inputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#last_modify_time SlsLogtailConfig#last_modify_time}
  */
  readonly lastModifyTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#log_sample SlsLogtailConfig#log_sample}
  */
  readonly logSample?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#logtail_config_name SlsLogtailConfig#logtail_config_name}
  */
  readonly logtailConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#output_type SlsLogtailConfig#output_type}
  */
  readonly outputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#project_name SlsLogtailConfig#project_name}
  */
  readonly projectName: string;
  /**
  * output_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#output_detail SlsLogtailConfig#output_detail}
  */
  readonly outputDetail?: SlsLogtailConfigOutputDetail;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#timeouts SlsLogtailConfig#timeouts}
  */
  readonly timeouts?: SlsLogtailConfigTimeouts;
}
export interface SlsLogtailConfigOutputDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#endpoint SlsLogtailConfig#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#logstore_name SlsLogtailConfig#logstore_name}
  */
  readonly logstoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#region SlsLogtailConfig#region}
  */
  readonly region?: string;
}

export function slsLogtailConfigOutputDetailToTerraform(struct?: SlsLogtailConfigOutputDetailOutputReference | SlsLogtailConfigOutputDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    logstore_name: cdktf.stringToTerraform(struct!.logstoreName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function slsLogtailConfigOutputDetailToHclTerraform(struct?: SlsLogtailConfigOutputDetailOutputReference | SlsLogtailConfigOutputDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logstore_name: {
      value: cdktf.stringToHclTerraform(struct!.logstoreName),
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

export class SlsLogtailConfigOutputDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsLogtailConfigOutputDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._logstoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstoreName = this._logstoreName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsLogtailConfigOutputDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._logstoreName = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._logstoreName = value.logstoreName;
      this._region = value.region;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // logstore_name - computed: false, optional: true, required: false
  private _logstoreName?: string; 
  public get logstoreName() {
    return this.getStringAttribute('logstore_name');
  }
  public set logstoreName(value: string) {
    this._logstoreName = value;
  }
  public resetLogstoreName() {
    this._logstoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreNameInput() {
    return this._logstoreName;
  }

  // region - computed: false, optional: true, required: false
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
export interface SlsLogtailConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#create SlsLogtailConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#delete SlsLogtailConfig#delete}
  */
  readonly delete?: string;
}

export function slsLogtailConfigTimeoutsToTerraform(struct?: SlsLogtailConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function slsLogtailConfigTimeoutsToHclTerraform(struct?: SlsLogtailConfigTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsLogtailConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SlsLogtailConfigTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsLogtailConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config alicloud_sls_logtail_config}
*/
export class SlsLogtailConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sls_logtail_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlsLogtailConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlsLogtailConfig to import
  * @param importFromId The id of the existing SlsLogtailConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlsLogtailConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sls_logtail_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_logtail_config alicloud_sls_logtail_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlsLogtailConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SlsLogtailConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sls_logtail_config',
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
    this._createTime = config.createTime;
    this._id = config.id;
    this._inputDetail = config.inputDetail;
    this._inputType = config.inputType;
    this._lastModifyTime = config.lastModifyTime;
    this._logSample = config.logSample;
    this._logtailConfigName = config.logtailConfigName;
    this._outputType = config.outputType;
    this._projectName = config.projectName;
    this._outputDetail.internalValue = config.outputDetail;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
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

  // input_detail - computed: false, optional: true, required: false
  private _inputDetail?: string; 
  public get inputDetail() {
    return this.getStringAttribute('input_detail');
  }
  public set inputDetail(value: string) {
    this._inputDetail = value;
  }
  public resetInputDetail() {
    this._inputDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDetailInput() {
    return this._inputDetail;
  }

  // input_type - computed: false, optional: true, required: false
  private _inputType?: string; 
  public get inputType() {
    return this.getStringAttribute('input_type');
  }
  public set inputType(value: string) {
    this._inputType = value;
  }
  public resetInputType() {
    this._inputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeInput() {
    return this._inputType;
  }

  // last_modify_time - computed: true, optional: true, required: false
  private _lastModifyTime?: number; 
  public get lastModifyTime() {
    return this.getNumberAttribute('last_modify_time');
  }
  public set lastModifyTime(value: number) {
    this._lastModifyTime = value;
  }
  public resetLastModifyTime() {
    this._lastModifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifyTimeInput() {
    return this._lastModifyTime;
  }

  // log_sample - computed: false, optional: true, required: false
  private _logSample?: string; 
  public get logSample() {
    return this.getStringAttribute('log_sample');
  }
  public set logSample(value: string) {
    this._logSample = value;
  }
  public resetLogSample() {
    this._logSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSampleInput() {
    return this._logSample;
  }

  // logtail_config_name - computed: true, optional: true, required: false
  private _logtailConfigName?: string; 
  public get logtailConfigName() {
    return this.getStringAttribute('logtail_config_name');
  }
  public set logtailConfigName(value: string) {
    this._logtailConfigName = value;
  }
  public resetLogtailConfigName() {
    this._logtailConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtailConfigNameInput() {
    return this._logtailConfigName;
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // output_detail - computed: false, optional: true, required: false
  private _outputDetail = new SlsLogtailConfigOutputDetailOutputReference(this, "output_detail");
  public get outputDetail() {
    return this._outputDetail;
  }
  public putOutputDetail(value: SlsLogtailConfigOutputDetail) {
    this._outputDetail.internalValue = value;
  }
  public resetOutputDetail() {
    this._outputDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDetailInput() {
    return this._outputDetail.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SlsLogtailConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SlsLogtailConfigTimeouts) {
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
      create_time: cdktf.stringToTerraform(this._createTime),
      id: cdktf.stringToTerraform(this._id),
      input_detail: cdktf.stringToTerraform(this._inputDetail),
      input_type: cdktf.stringToTerraform(this._inputType),
      last_modify_time: cdktf.numberToTerraform(this._lastModifyTime),
      log_sample: cdktf.stringToTerraform(this._logSample),
      logtail_config_name: cdktf.stringToTerraform(this._logtailConfigName),
      output_type: cdktf.stringToTerraform(this._outputType),
      project_name: cdktf.stringToTerraform(this._projectName),
      output_detail: slsLogtailConfigOutputDetailToTerraform(this._outputDetail.internalValue),
      timeouts: slsLogtailConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
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
      input_detail: {
        value: cdktf.stringToHclTerraform(this._inputDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_type: {
        value: cdktf.stringToHclTerraform(this._inputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_modify_time: {
        value: cdktf.numberToHclTerraform(this._lastModifyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_sample: {
        value: cdktf.stringToHclTerraform(this._logSample),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtail_config_name: {
        value: cdktf.stringToHclTerraform(this._logtailConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_type: {
        value: cdktf.stringToHclTerraform(this._outputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_detail: {
        value: slsLogtailConfigOutputDetailToHclTerraform(this._outputDetail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsLogtailConfigOutputDetailList",
      },
      timeouts: {
        value: slsLogtailConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SlsLogtailConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
