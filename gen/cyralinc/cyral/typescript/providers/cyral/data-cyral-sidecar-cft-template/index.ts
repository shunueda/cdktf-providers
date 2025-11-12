// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCyralSidecarCftTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the log integration that will be used by this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template#log_integration_id DataCyralSidecarCftTemplate#log_integration_id}
  */
  readonly logIntegrationId?: string;
  /**
  * ID of the metrics integration that will be used by this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template#metrics_integration_id DataCyralSidecarCftTemplate#metrics_integration_id}
  */
  readonly metricsIntegrationId?: string;
  /**
  * ID of the sidecar which the template will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template#sidecar_id DataCyralSidecarCftTemplate#sidecar_id}
  */
  readonly sidecarId: string;
  /**
  * Output variable with the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template#template DataCyralSidecarCftTemplate#template}
  */
  readonly template?: string;
  /**
  * aws_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template#aws_configuration DataCyralSidecarCftTemplate#aws_configuration}
  */
  readonly awsConfiguration: DataCyralSidecarCftTemplateAwsConfiguration[] | cdktf.IResolvable;
}
export interface DataCyralSidecarCftTemplateAwsConfiguration {
  /**
  * Key-pair name that will be associated to the sidecar EC2 instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template#key_name DataCyralSidecarCftTemplate#key_name}
  */
  readonly keyName?: string;
  /**
  * Defines a public IP and an internet-facing LB if set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template#publicly_accessible DataCyralSidecarCftTemplate#publicly_accessible}
  */
  readonly publiclyAccessible: boolean | cdktf.IResolvable;
}

export function dataCyralSidecarCftTemplateAwsConfigurationToTerraform(struct?: DataCyralSidecarCftTemplateAwsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    publicly_accessible: cdktf.booleanToTerraform(struct!.publiclyAccessible),
  }
}


export function dataCyralSidecarCftTemplateAwsConfigurationToHclTerraform(struct?: DataCyralSidecarCftTemplateAwsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publicly_accessible: {
      value: cdktf.booleanToHclTerraform(struct!.publiclyAccessible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCyralSidecarCftTemplateAwsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCyralSidecarCftTemplateAwsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._publiclyAccessible !== undefined) {
      hasAnyValues = true;
      internalValueResult.publiclyAccessible = this._publiclyAccessible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCyralSidecarCftTemplateAwsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyName = undefined;
      this._publiclyAccessible = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyName = value.keyName;
      this._publiclyAccessible = value.publiclyAccessible;
    }
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // publicly_accessible - computed: false, optional: false, required: true
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }
}

export class DataCyralSidecarCftTemplateAwsConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataCyralSidecarCftTemplateAwsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataCyralSidecarCftTemplateAwsConfigurationOutputReference {
    return new DataCyralSidecarCftTemplateAwsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template cyral_sidecar_cft_template}
*/
export class DataCyralSidecarCftTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_sidecar_cft_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCyralSidecarCftTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCyralSidecarCftTemplate to import
  * @param importFromId The id of the existing DataCyralSidecarCftTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCyralSidecarCftTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_sidecar_cft_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/sidecar_cft_template cyral_sidecar_cft_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCyralSidecarCftTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataCyralSidecarCftTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_sidecar_cft_template',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._logIntegrationId = config.logIntegrationId;
    this._metricsIntegrationId = config.metricsIntegrationId;
    this._sidecarId = config.sidecarId;
    this._template = config.template;
    this._awsConfiguration.internalValue = config.awsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_integration_id - computed: false, optional: true, required: false
  private _logIntegrationId?: string; 
  public get logIntegrationId() {
    return this.getStringAttribute('log_integration_id');
  }
  public set logIntegrationId(value: string) {
    this._logIntegrationId = value;
  }
  public resetLogIntegrationId() {
    this._logIntegrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntegrationIdInput() {
    return this._logIntegrationId;
  }

  // metrics_integration_id - computed: false, optional: true, required: false
  private _metricsIntegrationId?: string; 
  public get metricsIntegrationId() {
    return this.getStringAttribute('metrics_integration_id');
  }
  public set metricsIntegrationId(value: string) {
    this._metricsIntegrationId = value;
  }
  public resetMetricsIntegrationId() {
    this._metricsIntegrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsIntegrationIdInput() {
    return this._metricsIntegrationId;
  }

  // sidecar_id - computed: false, optional: false, required: true
  private _sidecarId?: string; 
  public get sidecarId() {
    return this.getStringAttribute('sidecar_id');
  }
  public set sidecarId(value: string) {
    this._sidecarId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarIdInput() {
    return this._sidecarId;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // aws_configuration - computed: false, optional: false, required: true
  private _awsConfiguration = new DataCyralSidecarCftTemplateAwsConfigurationList(this, "aws_configuration", true);
  public get awsConfiguration() {
    return this._awsConfiguration;
  }
  public putAwsConfiguration(value: DataCyralSidecarCftTemplateAwsConfiguration[] | cdktf.IResolvable) {
    this._awsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigurationInput() {
    return this._awsConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_integration_id: cdktf.stringToTerraform(this._logIntegrationId),
      metrics_integration_id: cdktf.stringToTerraform(this._metricsIntegrationId),
      sidecar_id: cdktf.stringToTerraform(this._sidecarId),
      template: cdktf.stringToTerraform(this._template),
      aws_configuration: cdktf.listMapper(dataCyralSidecarCftTemplateAwsConfigurationToTerraform, true)(this._awsConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      log_integration_id: {
        value: cdktf.stringToHclTerraform(this._logIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_integration_id: {
        value: cdktf.stringToHclTerraform(this._metricsIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sidecar_id: {
        value: cdktf.stringToHclTerraform(this._sidecarId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_configuration: {
        value: cdktf.listMapperHcl(dataCyralSidecarCftTemplateAwsConfigurationToHclTerraform, true)(this._awsConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataCyralSidecarCftTemplateAwsConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
