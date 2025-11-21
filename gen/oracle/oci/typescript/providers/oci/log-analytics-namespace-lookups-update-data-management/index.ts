// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsNamespaceLookupsUpdateDataManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#char_encoding LogAnalyticsNamespaceLookupsUpdateDataManagement#char_encoding}
  */
  readonly charEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#expect LogAnalyticsNamespaceLookupsUpdateDataManagement#expect}
  */
  readonly expect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#id LogAnalyticsNamespaceLookupsUpdateDataManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#is_force LogAnalyticsNamespaceLookupsUpdateDataManagement#is_force}
  */
  readonly isForce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#lookup_name LogAnalyticsNamespaceLookupsUpdateDataManagement#lookup_name}
  */
  readonly lookupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#namespace LogAnalyticsNamespaceLookupsUpdateDataManagement#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#update_lookup_file LogAnalyticsNamespaceLookupsUpdateDataManagement#update_lookup_file}
  */
  readonly updateLookupFile: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#timeouts LogAnalyticsNamespaceLookupsUpdateDataManagement#timeouts}
  */
  readonly timeouts?: LogAnalyticsNamespaceLookupsUpdateDataManagementTimeouts;
}
export interface LogAnalyticsNamespaceLookupsUpdateDataManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#create LogAnalyticsNamespaceLookupsUpdateDataManagement#create}
  */
  readonly create?: string;
}

export function logAnalyticsNamespaceLookupsUpdateDataManagementTimeoutsToTerraform(struct?: LogAnalyticsNamespaceLookupsUpdateDataManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function logAnalyticsNamespaceLookupsUpdateDataManagementTimeoutsToHclTerraform(struct?: LogAnalyticsNamespaceLookupsUpdateDataManagementTimeouts | cdktf.IResolvable): any {
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

export class LogAnalyticsNamespaceLookupsUpdateDataManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsNamespaceLookupsUpdateDataManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAnalyticsNamespaceLookupsUpdateDataManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management oci_log_analytics_namespace_lookups_update_data_management}
*/
export class LogAnalyticsNamespaceLookupsUpdateDataManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_lookups_update_data_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsNamespaceLookupsUpdateDataManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsNamespaceLookupsUpdateDataManagement to import
  * @param importFromId The id of the existing LogAnalyticsNamespaceLookupsUpdateDataManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsNamespaceLookupsUpdateDataManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_lookups_update_data_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/log_analytics_namespace_lookups_update_data_management oci_log_analytics_namespace_lookups_update_data_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsNamespaceLookupsUpdateDataManagementConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsNamespaceLookupsUpdateDataManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_lookups_update_data_management',
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
    this._charEncoding = config.charEncoding;
    this._expect = config.expect;
    this._id = config.id;
    this._isForce = config.isForce;
    this._lookupName = config.lookupName;
    this._namespace = config.namespace;
    this._updateLookupFile = config.updateLookupFile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // update_lookup_file - computed: false, optional: false, required: true
  private _updateLookupFile?: string; 
  public get updateLookupFile() {
    return this.getStringAttribute('update_lookup_file');
  }
  public set updateLookupFile(value: string) {
    this._updateLookupFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLookupFileInput() {
    return this._updateLookupFile;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsNamespaceLookupsUpdateDataManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsNamespaceLookupsUpdateDataManagementTimeouts) {
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
      char_encoding: cdktf.stringToTerraform(this._charEncoding),
      expect: cdktf.stringToTerraform(this._expect),
      id: cdktf.stringToTerraform(this._id),
      is_force: cdktf.booleanToTerraform(this._isForce),
      lookup_name: cdktf.stringToTerraform(this._lookupName),
      namespace: cdktf.stringToTerraform(this._namespace),
      update_lookup_file: cdktf.stringToTerraform(this._updateLookupFile),
      timeouts: logAnalyticsNamespaceLookupsUpdateDataManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      update_lookup_file: {
        value: cdktf.stringToHclTerraform(this._updateLookupFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: logAnalyticsNamespaceLookupsUpdateDataManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsNamespaceLookupsUpdateDataManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
