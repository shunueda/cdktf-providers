// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityDlpSensorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#entry_matches_to_trigger_sensor SecurityDlpSensors#entry_matches_to_trigger_sensor}
  */
  readonly entryMatchesToTriggerSensor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#primary_key SecurityDlpSensors#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#sensor_dictionaries SecurityDlpSensors#sensor_dictionaries}
  */
  readonly sensorDictionaries?: SecurityDlpSensorsSensorDictionaries[] | cdktf.IResolvable;
}
export interface SecurityDlpSensorsSensorDictionariesDictionary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#datasource SecurityDlpSensors#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#primary_key SecurityDlpSensors#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityDlpSensorsSensorDictionariesDictionaryToTerraform(struct?: SecurityDlpSensorsSensorDictionariesDictionary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityDlpSensorsSensorDictionariesDictionaryToHclTerraform(struct?: SecurityDlpSensorsSensorDictionariesDictionary | cdktf.IResolvable): any {
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

export class SecurityDlpSensorsSensorDictionariesDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityDlpSensorsSensorDictionariesDictionary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityDlpSensorsSensorDictionariesDictionary | cdktf.IResolvable | undefined) {
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
export interface SecurityDlpSensorsSensorDictionaries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#dictionary SecurityDlpSensors#dictionary}
  */
  readonly dictionary?: SecurityDlpSensorsSensorDictionariesDictionary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#dictionary_id SecurityDlpSensors#dictionary_id}
  */
  readonly dictionaryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#dictionary_matches_to_consider_risk SecurityDlpSensors#dictionary_matches_to_consider_risk}
  */
  readonly dictionaryMatchesToConsiderRisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#status SecurityDlpSensors#status}
  */
  readonly status?: string;
}

export function securityDlpSensorsSensorDictionariesToTerraform(struct?: SecurityDlpSensorsSensorDictionaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dictionary: securityDlpSensorsSensorDictionariesDictionaryToTerraform(struct!.dictionary),
    dictionary_id: cdktf.numberToTerraform(struct!.dictionaryId),
    dictionary_matches_to_consider_risk: cdktf.numberToTerraform(struct!.dictionaryMatchesToConsiderRisk),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function securityDlpSensorsSensorDictionariesToHclTerraform(struct?: SecurityDlpSensorsSensorDictionaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dictionary: {
      value: securityDlpSensorsSensorDictionariesDictionaryToHclTerraform(struct!.dictionary),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityDlpSensorsSensorDictionariesDictionary",
    },
    dictionary_id: {
      value: cdktf.numberToHclTerraform(struct!.dictionaryId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dictionary_matches_to_consider_risk: {
      value: cdktf.numberToHclTerraform(struct!.dictionaryMatchesToConsiderRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SecurityDlpSensorsSensorDictionariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityDlpSensorsSensorDictionaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._dictionaryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryId = this._dictionaryId;
    }
    if (this._dictionaryMatchesToConsiderRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryMatchesToConsiderRisk = this._dictionaryMatchesToConsiderRisk;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityDlpSensorsSensorDictionaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dictionary.internalValue = undefined;
      this._dictionaryId = undefined;
      this._dictionaryMatchesToConsiderRisk = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dictionary.internalValue = value.dictionary;
      this._dictionaryId = value.dictionaryId;
      this._dictionaryMatchesToConsiderRisk = value.dictionaryMatchesToConsiderRisk;
      this._status = value.status;
    }
  }

  // dictionary - computed: true, optional: true, required: false
  private _dictionary = new SecurityDlpSensorsSensorDictionariesDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: SecurityDlpSensorsSensorDictionariesDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // dictionary_id - computed: true, optional: true, required: false
  private _dictionaryId?: number; 
  public get dictionaryId() {
    return this.getNumberAttribute('dictionary_id');
  }
  public set dictionaryId(value: number) {
    this._dictionaryId = value;
  }
  public resetDictionaryId() {
    this._dictionaryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryIdInput() {
    return this._dictionaryId;
  }

  // dictionary_matches_to_consider_risk - computed: true, optional: true, required: false
  private _dictionaryMatchesToConsiderRisk?: number; 
  public get dictionaryMatchesToConsiderRisk() {
    return this.getNumberAttribute('dictionary_matches_to_consider_risk');
  }
  public set dictionaryMatchesToConsiderRisk(value: number) {
    this._dictionaryMatchesToConsiderRisk = value;
  }
  public resetDictionaryMatchesToConsiderRisk() {
    this._dictionaryMatchesToConsiderRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryMatchesToConsiderRiskInput() {
    return this._dictionaryMatchesToConsiderRisk;
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

export class SecurityDlpSensorsSensorDictionariesList extends cdktf.ComplexList {
  public internalValue? : SecurityDlpSensorsSensorDictionaries[] | cdktf.IResolvable

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
  public get(index: number): SecurityDlpSensorsSensorDictionariesOutputReference {
    return new SecurityDlpSensorsSensorDictionariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors fortisase_security_dlp_sensors}
*/
export class SecurityDlpSensors extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_dlp_sensors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityDlpSensors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityDlpSensors to import
  * @param importFromId The id of the existing SecurityDlpSensors that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityDlpSensors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_dlp_sensors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_dlp_sensors fortisase_security_dlp_sensors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityDlpSensorsConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityDlpSensorsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_dlp_sensors',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entryMatchesToTriggerSensor = config.entryMatchesToTriggerSensor;
    this._primaryKey = config.primaryKey;
    this._sensorDictionaries.internalValue = config.sensorDictionaries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entry_matches_to_trigger_sensor - computed: true, optional: true, required: false
  private _entryMatchesToTriggerSensor?: string; 
  public get entryMatchesToTriggerSensor() {
    return this.getStringAttribute('entry_matches_to_trigger_sensor');
  }
  public set entryMatchesToTriggerSensor(value: string) {
    this._entryMatchesToTriggerSensor = value;
  }
  public resetEntryMatchesToTriggerSensor() {
    this._entryMatchesToTriggerSensor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryMatchesToTriggerSensorInput() {
    return this._entryMatchesToTriggerSensor;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sensor_dictionaries - computed: true, optional: true, required: false
  private _sensorDictionaries = new SecurityDlpSensorsSensorDictionariesList(this, "sensor_dictionaries", false);
  public get sensorDictionaries() {
    return this._sensorDictionaries;
  }
  public putSensorDictionaries(value: SecurityDlpSensorsSensorDictionaries[] | cdktf.IResolvable) {
    this._sensorDictionaries.internalValue = value;
  }
  public resetSensorDictionaries() {
    this._sensorDictionaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorDictionariesInput() {
    return this._sensorDictionaries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entry_matches_to_trigger_sensor: cdktf.stringToTerraform(this._entryMatchesToTriggerSensor),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      sensor_dictionaries: cdktf.listMapper(securityDlpSensorsSensorDictionariesToTerraform, false)(this._sensorDictionaries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entry_matches_to_trigger_sensor: {
        value: cdktf.stringToHclTerraform(this._entryMatchesToTriggerSensor),
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
      sensor_dictionaries: {
        value: cdktf.listMapperHcl(securityDlpSensorsSensorDictionariesToHclTerraform, false)(this._sensorDictionaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityDlpSensorsSensorDictionariesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
