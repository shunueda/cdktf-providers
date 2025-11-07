// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/anomaly_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnomalySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert disposition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/anomaly_settings#alert_disposition AnomalySettings#alert_disposition}
  */
  readonly alertDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/anomaly_settings#id AnomalySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/anomaly_settings#policy_id AnomalySettings#policy_id}
  */
  readonly policyId: string;
  /**
  * Training model threshold info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/anomaly_settings#training_model_threshold AnomalySettings#training_model_threshold}
  */
  readonly trainingModelThreshold?: string;
}
export interface AnomalySettingsAlertDispositionDescription {
}

export function anomalySettingsAlertDispositionDescriptionToTerraform(struct?: AnomalySettingsAlertDispositionDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function anomalySettingsAlertDispositionDescriptionToHclTerraform(struct?: AnomalySettingsAlertDispositionDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AnomalySettingsAlertDispositionDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AnomalySettingsAlertDispositionDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnomalySettingsAlertDispositionDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggressive - computed: true, optional: false, required: false
  public get aggressive() {
    return this.getStringAttribute('aggressive');
  }

  // conservative - computed: true, optional: false, required: false
  public get conservative() {
    return this.getStringAttribute('conservative');
  }

  // moderate - computed: true, optional: false, required: false
  public get moderate() {
    return this.getStringAttribute('moderate');
  }
}

export class AnomalySettingsAlertDispositionDescriptionList extends cdktf.ComplexList {

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
  public get(index: number): AnomalySettingsAlertDispositionDescriptionOutputReference {
    return new AnomalySettingsAlertDispositionDescriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnomalySettingsTrainingModelDescription {
}

export function anomalySettingsTrainingModelDescriptionToTerraform(struct?: AnomalySettingsTrainingModelDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function anomalySettingsTrainingModelDescriptionToHclTerraform(struct?: AnomalySettingsTrainingModelDescription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AnomalySettingsTrainingModelDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AnomalySettingsTrainingModelDescription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnomalySettingsTrainingModelDescription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }
}

export class AnomalySettingsTrainingModelDescriptionList extends cdktf.ComplexList {

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
  public get(index: number): AnomalySettingsTrainingModelDescriptionOutputReference {
    return new AnomalySettingsTrainingModelDescriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/anomaly_settings prismacloud_anomaly_settings}
*/
export class AnomalySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_anomaly_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnomalySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnomalySettings to import
  * @param importFromId The id of the existing AnomalySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/anomaly_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnomalySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_anomaly_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/anomaly_settings prismacloud_anomaly_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnomalySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AnomalySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_anomaly_settings',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertDisposition = config.alertDisposition;
    this._id = config.id;
    this._policyId = config.policyId;
    this._trainingModelThreshold = config.trainingModelThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_disposition - computed: true, optional: true, required: false
  private _alertDisposition?: string; 
  public get alertDisposition() {
    return this.getStringAttribute('alert_disposition');
  }
  public set alertDisposition(value: string) {
    this._alertDisposition = value;
  }
  public resetAlertDisposition() {
    this._alertDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDispositionInput() {
    return this._alertDisposition;
  }

  // alert_disposition_description - computed: true, optional: false, required: false
  private _alertDispositionDescription = new AnomalySettingsAlertDispositionDescriptionList(this, "alert_disposition_description", false);
  public get alertDispositionDescription() {
    return this._alertDispositionDescription;
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

  // policy_description - computed: true, optional: false, required: false
  public get policyDescription() {
    return this.getStringAttribute('policy_description');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // training_model_description - computed: true, optional: false, required: false
  private _trainingModelDescription = new AnomalySettingsTrainingModelDescriptionList(this, "training_model_description", false);
  public get trainingModelDescription() {
    return this._trainingModelDescription;
  }

  // training_model_threshold - computed: true, optional: true, required: false
  private _trainingModelThreshold?: string; 
  public get trainingModelThreshold() {
    return this.getStringAttribute('training_model_threshold');
  }
  public set trainingModelThreshold(value: string) {
    this._trainingModelThreshold = value;
  }
  public resetTrainingModelThreshold() {
    this._trainingModelThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingModelThresholdInput() {
    return this._trainingModelThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_disposition: cdktf.stringToTerraform(this._alertDisposition),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      training_model_threshold: cdktf.stringToTerraform(this._trainingModelThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_disposition: {
        value: cdktf.stringToHclTerraform(this._alertDisposition),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      training_model_threshold: {
        value: cdktf.stringToHclTerraform(this._trainingModelThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
