// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityDlpDictionariesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#dictionary_type DataFortisaseSecurityDlpDictionaries#dictionary_type}
  */
  readonly dictionaryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#entries DataFortisaseSecurityDlpDictionaries#entries}
  */
  readonly entries?: DataFortisaseSecurityDlpDictionariesEntries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#entries_to_evaluate DataFortisaseSecurityDlpDictionaries#entries_to_evaluate}
  */
  readonly entriesToEvaluate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#primary_key DataFortisaseSecurityDlpDictionaries#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#sensitivity_label_guid DataFortisaseSecurityDlpDictionaries#sensitivity_label_guid}
  */
  readonly sensitivityLabelGuid?: string;
}
export interface DataFortisaseSecurityDlpDictionariesEntriesDlpDataType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#datasource DataFortisaseSecurityDlpDictionaries#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#primary_key DataFortisaseSecurityDlpDictionaries#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityDlpDictionariesEntriesDlpDataTypeToTerraform(struct?: DataFortisaseSecurityDlpDictionariesEntriesDlpDataType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityDlpDictionariesEntriesDlpDataTypeToHclTerraform(struct?: DataFortisaseSecurityDlpDictionariesEntriesDlpDataType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDlpDictionariesEntriesDlpDataTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityDlpDictionariesEntriesDlpDataType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDlpDictionariesEntriesDlpDataType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityDlpDictionariesEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#case_sensitive DataFortisaseSecurityDlpDictionaries#case_sensitive}
  */
  readonly caseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#dlp_data_type DataFortisaseSecurityDlpDictionaries#dlp_data_type}
  */
  readonly dlpDataType?: DataFortisaseSecurityDlpDictionariesEntriesDlpDataType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#pattern DataFortisaseSecurityDlpDictionaries#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#repeat DataFortisaseSecurityDlpDictionaries#repeat}
  */
  readonly repeat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#status DataFortisaseSecurityDlpDictionaries#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityDlpDictionariesEntriesToTerraform(struct?: DataFortisaseSecurityDlpDictionariesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.stringToTerraform(struct!.caseSensitive),
    dlp_data_type: dataFortisaseSecurityDlpDictionariesEntriesDlpDataTypeToTerraform(struct!.dlpDataType),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityDlpDictionariesEntriesToHclTerraform(struct?: DataFortisaseSecurityDlpDictionariesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlp_data_type: {
      value: dataFortisaseSecurityDlpDictionariesEntriesDlpDataTypeToHclTerraform(struct!.dlpDataType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityDlpDictionariesEntriesDlpDataType",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityDlpDictionariesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityDlpDictionariesEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._dlpDataType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpDataType = this._dlpDataType?.internalValue;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityDlpDictionariesEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._dlpDataType.internalValue = undefined;
      this._pattern = undefined;
      this._repeat = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._dlpDataType.internalValue = value.dlpDataType;
      this._pattern = value.pattern;
      this._repeat = value.repeat;
      this._status = value.status;
    }
  }

  // case_sensitive - computed: true, optional: true, required: false
  private _caseSensitive?: string; 
  public get caseSensitive() {
    return this.getStringAttribute('case_sensitive');
  }
  public set caseSensitive(value: string) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // dlp_data_type - computed: true, optional: true, required: false
  private _dlpDataType = new DataFortisaseSecurityDlpDictionariesEntriesDlpDataTypeOutputReference(this, "dlp_data_type");
  public get dlpDataType() {
    return this._dlpDataType;
  }
  public putDlpDataType(value: DataFortisaseSecurityDlpDictionariesEntriesDlpDataType) {
    this._dlpDataType.internalValue = value;
  }
  public resetDlpDataType() {
    this._dlpDataType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpDataTypeInput() {
    return this._dlpDataType.internalValue;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
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
}

export class DataFortisaseSecurityDlpDictionariesEntriesList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityDlpDictionariesEntries[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityDlpDictionariesEntriesOutputReference {
    return new DataFortisaseSecurityDlpDictionariesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries fortisase_security_dlp_dictionaries}
*/
export class DataFortisaseSecurityDlpDictionaries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_dlp_dictionaries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityDlpDictionaries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityDlpDictionaries to import
  * @param importFromId The id of the existing DataFortisaseSecurityDlpDictionaries that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityDlpDictionaries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_dlp_dictionaries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_dlp_dictionaries fortisase_security_dlp_dictionaries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityDlpDictionariesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityDlpDictionariesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_dlp_dictionaries',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dictionaryType = config.dictionaryType;
    this._entries.internalValue = config.entries;
    this._entriesToEvaluate = config.entriesToEvaluate;
    this._primaryKey = config.primaryKey;
    this._sensitivityLabelGuid = config.sensitivityLabelGuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dictionary_type - computed: true, optional: true, required: false
  private _dictionaryType?: string; 
  public get dictionaryType() {
    return this.getStringAttribute('dictionary_type');
  }
  public set dictionaryType(value: string) {
    this._dictionaryType = value;
  }
  public resetDictionaryType() {
    this._dictionaryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryTypeInput() {
    return this._dictionaryType;
  }

  // entries - computed: true, optional: true, required: false
  private _entries = new DataFortisaseSecurityDlpDictionariesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataFortisaseSecurityDlpDictionariesEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // entries_to_evaluate - computed: true, optional: true, required: false
  private _entriesToEvaluate?: string; 
  public get entriesToEvaluate() {
    return this.getStringAttribute('entries_to_evaluate');
  }
  public set entriesToEvaluate(value: string) {
    this._entriesToEvaluate = value;
  }
  public resetEntriesToEvaluate() {
    this._entriesToEvaluate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesToEvaluateInput() {
    return this._entriesToEvaluate;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // sensitivity_label_guid - computed: true, optional: true, required: false
  private _sensitivityLabelGuid?: string; 
  public get sensitivityLabelGuid() {
    return this.getStringAttribute('sensitivity_label_guid');
  }
  public set sensitivityLabelGuid(value: string) {
    this._sensitivityLabelGuid = value;
  }
  public resetSensitivityLabelGuid() {
    this._sensitivityLabelGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityLabelGuidInput() {
    return this._sensitivityLabelGuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dictionary_type: cdktf.stringToTerraform(this._dictionaryType),
      entries: cdktf.listMapper(dataFortisaseSecurityDlpDictionariesEntriesToTerraform, false)(this._entries.internalValue),
      entries_to_evaluate: cdktf.stringToTerraform(this._entriesToEvaluate),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      sensitivity_label_guid: cdktf.stringToTerraform(this._sensitivityLabelGuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dictionary_type: {
        value: cdktf.stringToHclTerraform(this._dictionaryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityDlpDictionariesEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityDlpDictionariesEntriesList",
      },
      entries_to_evaluate: {
        value: cdktf.stringToHclTerraform(this._entriesToEvaluate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitivity_label_guid: {
        value: cdktf.stringToHclTerraform(this._sensitivityLabelGuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
