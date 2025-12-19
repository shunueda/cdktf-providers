// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlsIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#id SlsIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#keys SlsIndex#keys}
  */
  readonly keys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#log_reduce SlsIndex#log_reduce}
  */
  readonly logReduce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#log_reduce_black_list SlsIndex#log_reduce_black_list}
  */
  readonly logReduceBlackList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#log_reduce_white_list SlsIndex#log_reduce_white_list}
  */
  readonly logReduceWhiteList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#logstore_name SlsIndex#logstore_name}
  */
  readonly logstoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#max_text_len SlsIndex#max_text_len}
  */
  readonly maxTextLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#project_name SlsIndex#project_name}
  */
  readonly projectName: string;
  /**
  * line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#line SlsIndex#line}
  */
  readonly line?: SlsIndexLine;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#timeouts SlsIndex#timeouts}
  */
  readonly timeouts?: SlsIndexTimeouts;
}
export interface SlsIndexLine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#case_sensitive SlsIndex#case_sensitive}
  */
  readonly caseSensitive: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#chn SlsIndex#chn}
  */
  readonly chn: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#exclude_keys SlsIndex#exclude_keys}
  */
  readonly excludeKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#include_keys SlsIndex#include_keys}
  */
  readonly includeKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#token SlsIndex#token}
  */
  readonly token: string[];
}

export function slsIndexLineToTerraform(struct?: SlsIndexLineOutputReference | SlsIndexLine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    chn: cdktf.booleanToTerraform(struct!.chn),
    exclude_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeKeys),
    include_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeKeys),
    token: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.token),
  }
}


export function slsIndexLineToHclTerraform(struct?: SlsIndexLineOutputReference | SlsIndexLine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chn: {
      value: cdktf.booleanToHclTerraform(struct!.chn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.token),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsIndexLineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsIndexLine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._chn !== undefined) {
      hasAnyValues = true;
      internalValueResult.chn = this._chn;
    }
    if (this._excludeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeKeys = this._excludeKeys;
    }
    if (this._includeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeKeys = this._includeKeys;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsIndexLine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._chn = undefined;
      this._excludeKeys = undefined;
      this._includeKeys = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._chn = value.chn;
      this._excludeKeys = value.excludeKeys;
      this._includeKeys = value.includeKeys;
      this._token = value.token;
    }
  }

  // case_sensitive - computed: false, optional: false, required: true
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // chn - computed: false, optional: false, required: true
  private _chn?: boolean | cdktf.IResolvable; 
  public get chn() {
    return this.getBooleanAttribute('chn');
  }
  public set chn(value: boolean | cdktf.IResolvable) {
    this._chn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chnInput() {
    return this._chn;
  }

  // exclude_keys - computed: false, optional: true, required: false
  private _excludeKeys?: string[]; 
  public get excludeKeys() {
    return this.getListAttribute('exclude_keys');
  }
  public set excludeKeys(value: string[]) {
    this._excludeKeys = value;
  }
  public resetExcludeKeys() {
    this._excludeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeKeysInput() {
    return this._excludeKeys;
  }

  // include_keys - computed: false, optional: true, required: false
  private _includeKeys?: string[]; 
  public get includeKeys() {
    return this.getListAttribute('include_keys');
  }
  public set includeKeys(value: string[]) {
    this._includeKeys = value;
  }
  public resetIncludeKeys() {
    this._includeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeKeysInput() {
    return this._includeKeys;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string[]; 
  public get token() {
    return this.getListAttribute('token');
  }
  public set token(value: string[]) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface SlsIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#create SlsIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#delete SlsIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#update SlsIndex#update}
  */
  readonly update?: string;
}

export function slsIndexTimeoutsToTerraform(struct?: SlsIndexTimeouts | cdktf.IResolvable): any {
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


export function slsIndexTimeoutsToHclTerraform(struct?: SlsIndexTimeouts | cdktf.IResolvable): any {
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

export class SlsIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SlsIndexTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlsIndexTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index alicloud_sls_index}
*/
export class SlsIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sls_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlsIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlsIndex to import
  * @param importFromId The id of the existing SlsIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlsIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sls_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_index alicloud_sls_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlsIndexConfig
  */
  public constructor(scope: Construct, id: string, config: SlsIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sls_index',
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
    this._id = config.id;
    this._keys = config.keys;
    this._logReduce = config.logReduce;
    this._logReduceBlackList = config.logReduceBlackList;
    this._logReduceWhiteList = config.logReduceWhiteList;
    this._logstoreName = config.logstoreName;
    this._maxTextLen = config.maxTextLen;
    this._projectName = config.projectName;
    this._line.internalValue = config.line;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // keys - computed: false, optional: true, required: false
  private _keys?: string; 
  public get keys() {
    return this.getStringAttribute('keys');
  }
  public set keys(value: string) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // log_reduce - computed: false, optional: true, required: false
  private _logReduce?: boolean | cdktf.IResolvable; 
  public get logReduce() {
    return this.getBooleanAttribute('log_reduce');
  }
  public set logReduce(value: boolean | cdktf.IResolvable) {
    this._logReduce = value;
  }
  public resetLogReduce() {
    this._logReduce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReduceInput() {
    return this._logReduce;
  }

  // log_reduce_black_list - computed: false, optional: true, required: false
  private _logReduceBlackList?: string[]; 
  public get logReduceBlackList() {
    return this.getListAttribute('log_reduce_black_list');
  }
  public set logReduceBlackList(value: string[]) {
    this._logReduceBlackList = value;
  }
  public resetLogReduceBlackList() {
    this._logReduceBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReduceBlackListInput() {
    return this._logReduceBlackList;
  }

  // log_reduce_white_list - computed: false, optional: true, required: false
  private _logReduceWhiteList?: string[]; 
  public get logReduceWhiteList() {
    return this.getListAttribute('log_reduce_white_list');
  }
  public set logReduceWhiteList(value: string[]) {
    this._logReduceWhiteList = value;
  }
  public resetLogReduceWhiteList() {
    this._logReduceWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReduceWhiteListInput() {
    return this._logReduceWhiteList;
  }

  // logstore_name - computed: false, optional: false, required: true
  private _logstoreName?: string; 
  public get logstoreName() {
    return this.getStringAttribute('logstore_name');
  }
  public set logstoreName(value: string) {
    this._logstoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreNameInput() {
    return this._logstoreName;
  }

  // max_text_len - computed: false, optional: true, required: false
  private _maxTextLen?: number; 
  public get maxTextLen() {
    return this.getNumberAttribute('max_text_len');
  }
  public set maxTextLen(value: number) {
    this._maxTextLen = value;
  }
  public resetMaxTextLen() {
    this._maxTextLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTextLenInput() {
    return this._maxTextLen;
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

  // line - computed: false, optional: true, required: false
  private _line = new SlsIndexLineOutputReference(this, "line");
  public get line() {
    return this._line;
  }
  public putLine(value: SlsIndexLine) {
    this._line.internalValue = value;
  }
  public resetLine() {
    this._line.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SlsIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SlsIndexTimeouts) {
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
      keys: cdktf.stringToTerraform(this._keys),
      log_reduce: cdktf.booleanToTerraform(this._logReduce),
      log_reduce_black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logReduceBlackList),
      log_reduce_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logReduceWhiteList),
      logstore_name: cdktf.stringToTerraform(this._logstoreName),
      max_text_len: cdktf.numberToTerraform(this._maxTextLen),
      project_name: cdktf.stringToTerraform(this._projectName),
      line: slsIndexLineToTerraform(this._line.internalValue),
      timeouts: slsIndexTimeoutsToTerraform(this._timeouts.internalValue),
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
      keys: {
        value: cdktf.stringToHclTerraform(this._keys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_reduce: {
        value: cdktf.booleanToHclTerraform(this._logReduce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_reduce_black_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logReduceBlackList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      log_reduce_white_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logReduceWhiteList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      logstore_name: {
        value: cdktf.stringToHclTerraform(this._logstoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_text_len: {
        value: cdktf.numberToHclTerraform(this._maxTextLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line: {
        value: slsIndexLineToHclTerraform(this._line.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsIndexLineList",
      },
      timeouts: {
        value: slsIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SlsIndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
