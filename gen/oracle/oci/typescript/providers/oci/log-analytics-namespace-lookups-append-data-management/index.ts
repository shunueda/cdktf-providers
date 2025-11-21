// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsNamespaceLookupsAppendDataManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#append_lookup_file LogAnalyticsNamespaceLookupsAppendDataManagement#append_lookup_file}
  */
  readonly appendLookupFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#char_encoding LogAnalyticsNamespaceLookupsAppendDataManagement#char_encoding}
  */
  readonly charEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#expect LogAnalyticsNamespaceLookupsAppendDataManagement#expect}
  */
  readonly expect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#id LogAnalyticsNamespaceLookupsAppendDataManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#is_force LogAnalyticsNamespaceLookupsAppendDataManagement#is_force}
  */
  readonly isForce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#lookup_name LogAnalyticsNamespaceLookupsAppendDataManagement#lookup_name}
  */
  readonly lookupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#namespace LogAnalyticsNamespaceLookupsAppendDataManagement#namespace}
  */
  readonly namespace: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#timeouts LogAnalyticsNamespaceLookupsAppendDataManagement#timeouts}
  */
  readonly timeouts?: LogAnalyticsNamespaceLookupsAppendDataManagementTimeouts;
}
export interface LogAnalyticsNamespaceLookupsAppendDataManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#create LogAnalyticsNamespaceLookupsAppendDataManagement#create}
  */
  readonly create?: string;
}

export function logAnalyticsNamespaceLookupsAppendDataManagementTimeoutsToTerraform(struct?: LogAnalyticsNamespaceLookupsAppendDataManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function logAnalyticsNamespaceLookupsAppendDataManagementTimeoutsToHclTerraform(struct?: LogAnalyticsNamespaceLookupsAppendDataManagementTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceLookupsAppendDataManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsNamespaceLookupsAppendDataManagementTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceLookupsAppendDataManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management oci_log_analytics_namespace_lookups_append_data_management}
*/
export class LogAnalyticsNamespaceLookupsAppendDataManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_lookups_append_data_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsNamespaceLookupsAppendDataManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsNamespaceLookupsAppendDataManagement to import
  * @param importFromId The id of the existing LogAnalyticsNamespaceLookupsAppendDataManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsNamespaceLookupsAppendDataManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_lookups_append_data_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_append_data_management oci_log_analytics_namespace_lookups_append_data_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsNamespaceLookupsAppendDataManagementConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsNamespaceLookupsAppendDataManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_lookups_append_data_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appendLookupFile = config.appendLookupFile;
    this._charEncoding = config.charEncoding;
    this._expect = config.expect;
    this._id = config.id;
    this._isForce = config.isForce;
    this._lookupName = config.lookupName;
    this._namespace = config.namespace;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_lookup_file - computed: false, optional: false, required: true
  private _appendLookupFile?: string; 
  public get appendLookupFile() {
    return this.getStringAttribute('append_lookup_file');
  }
  public set appendLookupFile(value: string) {
    this._appendLookupFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendLookupFileInput() {
    return this._appendLookupFile;
  }

  // char_encoding - computed: true, optional: true, required: false
  private _charEncoding?: string; 
  public get charEncoding() {
    return this.getStringAttribute('char_encoding');
  }
  public set charEncoding(value: string) {
    this._charEncoding = value;
  }
  public resetCharEncoding() {
    this._charEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charEncodingInput() {
    return this._charEncoding;
  }

  // expect - computed: true, optional: true, required: false
  private _expect?: string; 
  public get expect() {
    return this.getStringAttribute('expect');
  }
  public set expect(value: string) {
    this._expect = value;
  }
  public resetExpect() {
    this._expect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect;
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

  // is_force - computed: true, optional: true, required: false
  private _isForce?: boolean | cdktf.IResolvable; 
  public get isForce() {
    return this.getBooleanAttribute('is_force');
  }
  public set isForce(value: boolean | cdktf.IResolvable) {
    this._isForce = value;
  }
  public resetIsForce() {
    this._isForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceInput() {
    return this._isForce;
  }

  // lookup_name - computed: false, optional: false, required: true
  private _lookupName?: string; 
  public get lookupName() {
    return this.getStringAttribute('lookup_name');
  }
  public set lookupName(value: string) {
    this._lookupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNameInput() {
    return this._lookupName;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsNamespaceLookupsAppendDataManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsNamespaceLookupsAppendDataManagementTimeouts) {
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
      append_lookup_file: cdktf.stringToTerraform(this._appendLookupFile),
      char_encoding: cdktf.stringToTerraform(this._charEncoding),
      expect: cdktf.stringToTerraform(this._expect),
      id: cdktf.stringToTerraform(this._id),
      is_force: cdktf.booleanToTerraform(this._isForce),
      lookup_name: cdktf.stringToTerraform(this._lookupName),
      namespace: cdktf.stringToTerraform(this._namespace),
      timeouts: logAnalyticsNamespaceLookupsAppendDataManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_lookup_file: {
        value: cdktf.stringToHclTerraform(this._appendLookupFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      char_encoding: {
        value: cdktf.stringToHclTerraform(this._charEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expect: {
        value: cdktf.stringToHclTerraform(this._expect),
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
      is_force: {
        value: cdktf.booleanToHclTerraform(this._isForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lookup_name: {
        value: cdktf.stringToHclTerraform(this._lookupName),
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
      timeouts: {
        value: logAnalyticsNamespaceLookupsAppendDataManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsNamespaceLookupsAppendDataManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
