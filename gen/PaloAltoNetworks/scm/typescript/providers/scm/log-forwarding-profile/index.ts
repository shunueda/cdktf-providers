// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogForwardingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Log forwarding profile description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#description LogForwardingProfile#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#device LogForwardingProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#folder LogForwardingProfile#folder}
  */
  readonly folder?: string;
  /**
  * Match list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#match_list LogForwardingProfile#match_list}
  */
  readonly matchList?: LogForwardingProfileMatchListStruct[] | cdktf.IResolvable;
  /**
  * The name of the log forwarding profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#name LogForwardingProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#snippet LogForwardingProfile#snippet}
  */
  readonly snippet?: string;
}
export interface LogForwardingProfileMatchListStruct {
  /**
  * Match profile description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#action_desc LogForwardingProfile#action_desc}
  */
  readonly actionDesc?: string;
  /**
  * Filter match criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#filter LogForwardingProfile#filter}
  */
  readonly filter?: string;
  /**
  * Log type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#log_type LogForwardingProfile#log_type}
  */
  readonly logType?: string;
  /**
  * Name of the match profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#name LogForwardingProfile#name}
  */
  readonly name?: string;
  /**
  * A list of HTTP server profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#send_http LogForwardingProfile#send_http}
  */
  readonly sendHttp?: string[];
  /**
  * A list of syslog server profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#send_syslog LogForwardingProfile#send_syslog}
  */
  readonly sendSyslog?: string[];
}

export function logForwardingProfileMatchListStructToTerraform(struct?: LogForwardingProfileMatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_desc: cdktf.stringToTerraform(struct!.actionDesc),
    filter: cdktf.stringToTerraform(struct!.filter),
    log_type: cdktf.stringToTerraform(struct!.logType),
    name: cdktf.stringToTerraform(struct!.name),
    send_http: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sendHttp),
    send_syslog: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sendSyslog),
  }
}


export function logForwardingProfileMatchListStructToHclTerraform(struct?: LogForwardingProfileMatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_desc: {
      value: cdktf.stringToHclTerraform(struct!.actionDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_http: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sendHttp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_syslog: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sendSyslog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileMatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwardingProfileMatchListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDesc = this._actionDesc;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sendHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHttp = this._sendHttp;
    }
    if (this._sendSyslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendSyslog = this._sendSyslog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionDesc = undefined;
      this._filter = undefined;
      this._logType = undefined;
      this._name = undefined;
      this._sendHttp = undefined;
      this._sendSyslog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionDesc = value.actionDesc;
      this._filter = value.filter;
      this._logType = value.logType;
      this._name = value.name;
      this._sendHttp = value.sendHttp;
      this._sendSyslog = value.sendSyslog;
    }
  }

  // action_desc - computed: false, optional: true, required: false
  private _actionDesc?: string; 
  public get actionDesc() {
    return this.getStringAttribute('action_desc');
  }
  public set actionDesc(value: string) {
    this._actionDesc = value;
  }
  public resetActionDesc() {
    this._actionDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDescInput() {
    return this._actionDesc;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // name - computed: false, optional: true, required: false
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

  // send_http - computed: false, optional: true, required: false
  private _sendHttp?: string[]; 
  public get sendHttp() {
    return this.getListAttribute('send_http');
  }
  public set sendHttp(value: string[]) {
    this._sendHttp = value;
  }
  public resetSendHttp() {
    this._sendHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHttpInput() {
    return this._sendHttp;
  }

  // send_syslog - computed: false, optional: true, required: false
  private _sendSyslog?: string[]; 
  public get sendSyslog() {
    return this.getListAttribute('send_syslog');
  }
  public set sendSyslog(value: string[]) {
    this._sendSyslog = value;
  }
  public resetSendSyslog() {
    this._sendSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSyslogInput() {
    return this._sendSyslog;
  }
}

export class LogForwardingProfileMatchListStructList extends cdktf.ComplexList {
  public internalValue? : LogForwardingProfileMatchListStruct[] | cdktf.IResolvable

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
  public get(index: number): LogForwardingProfileMatchListStructOutputReference {
    return new LogForwardingProfileMatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile scm_log_forwarding_profile}
*/
export class LogForwardingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_log_forwarding_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogForwardingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogForwardingProfile to import
  * @param importFromId The id of the existing LogForwardingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogForwardingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_log_forwarding_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/log_forwarding_profile scm_log_forwarding_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogForwardingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LogForwardingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_log_forwarding_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
    this._device = config.device;
    this._folder = config.folder;
    this._matchList.internalValue = config.matchList;
    this._name = config.name;
    this._snippet = config.snippet;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_list - computed: false, optional: true, required: false
  private _matchList = new LogForwardingProfileMatchListStructList(this, "match_list", false);
  public get matchList() {
    return this._matchList;
  }
  public putMatchList(value: LogForwardingProfileMatchListStruct[] | cdktf.IResolvable) {
    this._matchList.internalValue = value;
  }
  public resetMatchList() {
    this._matchList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchListInput() {
    return this._matchList.internalValue;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      match_list: cdktf.listMapper(logForwardingProfileMatchListStructToTerraform, false)(this._matchList.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_list: {
        value: cdktf.listMapperHcl(logForwardingProfileMatchListStructToHclTerraform, false)(this._matchList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogForwardingProfileMatchListStructList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
