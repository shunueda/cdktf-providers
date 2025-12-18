// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmConfigConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#agent_version ApmConfigConfig#agent_version}
  */
  readonly agentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#apm_domain_id ApmConfigConfig#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#attach_install_dir ApmConfigConfig#attach_install_dir}
  */
  readonly attachInstallDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#config_type ApmConfigConfig#config_type}
  */
  readonly configType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#defined_tags ApmConfigConfig#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#description ApmConfigConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#filter_id ApmConfigConfig#filter_id}
  */
  readonly filterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}
  */
  readonly filterText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#freeform_tags ApmConfigConfig#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#group ApmConfigConfig#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#id ApmConfigConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#management_agent_id ApmConfigConfig#management_agent_id}
  */
  readonly managementAgentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#match_agents_with_attribute_value ApmConfigConfig#match_agents_with_attribute_value}
  */
  readonly matchAgentsWithAttributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#namespace ApmConfigConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#opc_dry_run ApmConfigConfig#opc_dry_run}
  */
  readonly opcDryRun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#options ApmConfigConfig#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#process_filter ApmConfigConfig#process_filter}
  */
  readonly processFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#run_as_user ApmConfigConfig#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#service_name ApmConfigConfig#service_name}
  */
  readonly serviceName?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#config ApmConfigConfig#config}
  */
  readonly config?: ApmConfigConfigConfigA;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#dimensions ApmConfigConfig#dimensions}
  */
  readonly dimensions?: ApmConfigConfigDimensions[] | cdktf.IResolvable;
  /**
  * in_use_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#in_use_by ApmConfigConfig#in_use_by}
  */
  readonly inUseBy?: ApmConfigConfigInUseBy[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#metrics ApmConfigConfig#metrics}
  */
  readonly metrics?: ApmConfigConfigMetrics[] | cdktf.IResolvable;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#overrides ApmConfigConfig#overrides}
  */
  readonly overrides?: ApmConfigConfigOverrides;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#rules ApmConfigConfig#rules}
  */
  readonly rules?: ApmConfigConfigRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#timeouts ApmConfigConfig#timeouts}
  */
  readonly timeouts?: ApmConfigConfigTimeouts;
}
export interface ApmConfigConfigConfigConfigMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#body ApmConfigConfig#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#content_type ApmConfigConfig#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#file_name ApmConfigConfig#file_name}
  */
  readonly fileName?: string;
}

export function apmConfigConfigConfigConfigMapToTerraform(struct?: ApmConfigConfigConfigConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function apmConfigConfigConfigConfigMapToHclTerraform(struct?: ApmConfigConfigConfigConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmConfigConfigConfigConfigMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmConfigConfigConfigConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmConfigConfigConfigConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._contentType = undefined;
      this._fileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._contentType = value.contentType;
      this._fileName = value.fileName;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}

export class ApmConfigConfigConfigConfigMapList extends cdktf.ComplexList {
  public internalValue? : ApmConfigConfigConfigConfigMap[] | cdktf.IResolvable

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
  public get(index: number): ApmConfigConfigConfigConfigMapOutputReference {
    return new ApmConfigConfigConfigConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmConfigConfigConfigA {
  /**
  * config_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#config_map ApmConfigConfig#config_map}
  */
  readonly configMap?: ApmConfigConfigConfigConfigMap[] | cdktf.IResolvable;
}

export function apmConfigConfigConfigAToTerraform(struct?: ApmConfigConfigConfigAOutputReference | ApmConfigConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.listMapper(apmConfigConfigConfigConfigMapToTerraform, true)(struct!.configMap),
  }
}


export function apmConfigConfigConfigAToHclTerraform(struct?: ApmConfigConfigConfigAOutputReference | ApmConfigConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.listMapperHcl(apmConfigConfigConfigConfigMapToHclTerraform, true)(struct!.configMap),
      isBlock: true,
      type: "list",
      storageClassType: "ApmConfigConfigConfigConfigMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmConfigConfigConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmConfigConfigConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmConfigConfigConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMap.internalValue = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new ApmConfigConfigConfigConfigMapList(this, "config_map", false);
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: ApmConfigConfigConfigConfigMap[] | cdktf.IResolvable) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }
}
export interface ApmConfigConfigDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#name ApmConfigConfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}
  */
  readonly valueSource?: string;
}

export function apmConfigConfigDimensionsToTerraform(struct?: ApmConfigConfigDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_source: cdktf.stringToTerraform(struct!.valueSource),
  }
}


export function apmConfigConfigDimensionsToHclTerraform(struct?: ApmConfigConfigDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_source: {
      value: cdktf.stringToHclTerraform(struct!.valueSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmConfigConfigDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmConfigConfigDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSource = this._valueSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmConfigConfigDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueSource = value.valueSource;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value_source - computed: true, optional: true, required: false
  private _valueSource?: string; 
  public get valueSource() {
    return this.getStringAttribute('value_source');
  }
  public set valueSource(value: string) {
    this._valueSource = value;
  }
  public resetValueSource() {
    this._valueSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSourceInput() {
    return this._valueSource;
  }
}

export class ApmConfigConfigDimensionsList extends cdktf.ComplexList {
  public internalValue? : ApmConfigConfigDimensions[] | cdktf.IResolvable

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
  public get(index: number): ApmConfigConfigDimensionsOutputReference {
    return new ApmConfigConfigDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmConfigConfigInUseBy {
}

export function apmConfigConfigInUseByToTerraform(struct?: ApmConfigConfigInUseBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmConfigConfigInUseByToHclTerraform(struct?: ApmConfigConfigInUseBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmConfigConfigInUseByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmConfigConfigInUseBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmConfigConfigInUseBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // options_group - computed: true, optional: false, required: false
  public get optionsGroup() {
    return this.getStringAttribute('options_group');
  }
}

export class ApmConfigConfigInUseByList extends cdktf.ComplexList {
  public internalValue? : ApmConfigConfigInUseBy[] | cdktf.IResolvable

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
  public get(index: number): ApmConfigConfigInUseByOutputReference {
    return new ApmConfigConfigInUseByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmConfigConfigMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#description ApmConfigConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#name ApmConfigConfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#unit ApmConfigConfig#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#value_source ApmConfigConfig#value_source}
  */
  readonly valueSource?: string;
}

export function apmConfigConfigMetricsToTerraform(struct?: ApmConfigConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    unit: cdktf.stringToTerraform(struct!.unit),
    value_source: cdktf.stringToTerraform(struct!.valueSource),
  }
}


export function apmConfigConfigMetricsToHclTerraform(struct?: ApmConfigConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_source: {
      value: cdktf.stringToHclTerraform(struct!.valueSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmConfigConfigMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmConfigConfigMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._valueSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSource = this._valueSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmConfigConfigMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._unit = undefined;
      this._valueSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._unit = value.unit;
      this._valueSource = value.valueSource;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value_source - computed: true, optional: true, required: false
  private _valueSource?: string; 
  public get valueSource() {
    return this.getStringAttribute('value_source');
  }
  public set valueSource(value: string) {
    this._valueSource = value;
  }
  public resetValueSource() {
    this._valueSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSourceInput() {
    return this._valueSource;
  }
}

export class ApmConfigConfigMetricsList extends cdktf.ComplexList {
  public internalValue? : ApmConfigConfigMetrics[] | cdktf.IResolvable

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
  public get(index: number): ApmConfigConfigMetricsOutputReference {
    return new ApmConfigConfigMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmConfigConfigOverridesOverrideListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#agent_filter ApmConfigConfig#agent_filter}
  */
  readonly agentFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#override_map ApmConfigConfig#override_map}
  */
  readonly overrideMap?: { [key: string]: string };
}

export function apmConfigConfigOverridesOverrideListStructToTerraform(struct?: ApmConfigConfigOverridesOverrideListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_filter: cdktf.stringToTerraform(struct!.agentFilter),
    override_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overrideMap),
  }
}


export function apmConfigConfigOverridesOverrideListStructToHclTerraform(struct?: ApmConfigConfigOverridesOverrideListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_filter: {
      value: cdktf.stringToHclTerraform(struct!.agentFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overrideMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmConfigConfigOverridesOverrideListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmConfigConfigOverridesOverrideListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFilter = this._agentFilter;
    }
    if (this._overrideMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideMap = this._overrideMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmConfigConfigOverridesOverrideListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentFilter = undefined;
      this._overrideMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentFilter = value.agentFilter;
      this._overrideMap = value.overrideMap;
    }
  }

  // agent_filter - computed: true, optional: true, required: false
  private _agentFilter?: string; 
  public get agentFilter() {
    return this.getStringAttribute('agent_filter');
  }
  public set agentFilter(value: string) {
    this._agentFilter = value;
  }
  public resetAgentFilter() {
    this._agentFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFilterInput() {
    return this._agentFilter;
  }

  // override_map - computed: true, optional: true, required: false
  private _overrideMap?: { [key: string]: string }; 
  public get overrideMap() {
    return this.getStringMapAttribute('override_map');
  }
  public set overrideMap(value: { [key: string]: string }) {
    this._overrideMap = value;
  }
  public resetOverrideMap() {
    this._overrideMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideMapInput() {
    return this._overrideMap;
  }
}

export class ApmConfigConfigOverridesOverrideListStructList extends cdktf.ComplexList {
  public internalValue? : ApmConfigConfigOverridesOverrideListStruct[] | cdktf.IResolvable

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
  public get(index: number): ApmConfigConfigOverridesOverrideListStructOutputReference {
    return new ApmConfigConfigOverridesOverrideListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmConfigConfigOverrides {
  /**
  * override_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#override_list ApmConfigConfig#override_list}
  */
  readonly overrideList?: ApmConfigConfigOverridesOverrideListStruct[] | cdktf.IResolvable;
}

export function apmConfigConfigOverridesToTerraform(struct?: ApmConfigConfigOverridesOutputReference | ApmConfigConfigOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_list: cdktf.listMapper(apmConfigConfigOverridesOverrideListStructToTerraform, true)(struct!.overrideList),
  }
}


export function apmConfigConfigOverridesToHclTerraform(struct?: ApmConfigConfigOverridesOutputReference | ApmConfigConfigOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_list: {
      value: cdktf.listMapperHcl(apmConfigConfigOverridesOverrideListStructToHclTerraform, true)(struct!.overrideList),
      isBlock: true,
      type: "list",
      storageClassType: "ApmConfigConfigOverridesOverrideListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmConfigConfigOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmConfigConfigOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideList = this._overrideList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmConfigConfigOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrideList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrideList.internalValue = value.overrideList;
    }
  }

  // override_list - computed: false, optional: true, required: false
  private _overrideList = new ApmConfigConfigOverridesOverrideListStructList(this, "override_list", false);
  public get overrideList() {
    return this._overrideList;
  }
  public putOverrideList(value: ApmConfigConfigOverridesOverrideListStruct[] | cdktf.IResolvable) {
    this._overrideList.internalValue = value;
  }
  public resetOverrideList() {
    this._overrideList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideListInput() {
    return this._overrideList.internalValue;
  }
}
export interface ApmConfigConfigRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#display_name ApmConfigConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#filter_text ApmConfigConfig#filter_text}
  */
  readonly filterText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#is_apply_to_error_spans ApmConfigConfig#is_apply_to_error_spans}
  */
  readonly isApplyToErrorSpans?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#is_enabled ApmConfigConfig#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#priority ApmConfigConfig#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#satisfied_response_time ApmConfigConfig#satisfied_response_time}
  */
  readonly satisfiedResponseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#tolerating_response_time ApmConfigConfig#tolerating_response_time}
  */
  readonly toleratingResponseTime?: number;
}

export function apmConfigConfigRulesToTerraform(struct?: ApmConfigConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    filter_text: cdktf.stringToTerraform(struct!.filterText),
    is_apply_to_error_spans: cdktf.booleanToTerraform(struct!.isApplyToErrorSpans),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    priority: cdktf.numberToTerraform(struct!.priority),
    satisfied_response_time: cdktf.numberToTerraform(struct!.satisfiedResponseTime),
    tolerating_response_time: cdktf.numberToTerraform(struct!.toleratingResponseTime),
  }
}


export function apmConfigConfigRulesToHclTerraform(struct?: ApmConfigConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_text: {
      value: cdktf.stringToHclTerraform(struct!.filterText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_apply_to_error_spans: {
      value: cdktf.booleanToHclTerraform(struct!.isApplyToErrorSpans),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    satisfied_response_time: {
      value: cdktf.numberToHclTerraform(struct!.satisfiedResponseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerating_response_time: {
      value: cdktf.numberToHclTerraform(struct!.toleratingResponseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmConfigConfigRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmConfigConfigRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._filterText !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterText = this._filterText;
    }
    if (this._isApplyToErrorSpans !== undefined) {
      hasAnyValues = true;
      internalValueResult.isApplyToErrorSpans = this._isApplyToErrorSpans;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._satisfiedResponseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.satisfiedResponseTime = this._satisfiedResponseTime;
    }
    if (this._toleratingResponseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleratingResponseTime = this._toleratingResponseTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmConfigConfigRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._filterText = undefined;
      this._isApplyToErrorSpans = undefined;
      this._isEnabled = undefined;
      this._priority = undefined;
      this._satisfiedResponseTime = undefined;
      this._toleratingResponseTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._filterText = value.filterText;
      this._isApplyToErrorSpans = value.isApplyToErrorSpans;
      this._isEnabled = value.isEnabled;
      this._priority = value.priority;
      this._satisfiedResponseTime = value.satisfiedResponseTime;
      this._toleratingResponseTime = value.toleratingResponseTime;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // filter_text - computed: true, optional: true, required: false
  private _filterText?: string; 
  public get filterText() {
    return this.getStringAttribute('filter_text');
  }
  public set filterText(value: string) {
    this._filterText = value;
  }
  public resetFilterText() {
    this._filterText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTextInput() {
    return this._filterText;
  }

  // is_apply_to_error_spans - computed: true, optional: true, required: false
  private _isApplyToErrorSpans?: boolean | cdktf.IResolvable; 
  public get isApplyToErrorSpans() {
    return this.getBooleanAttribute('is_apply_to_error_spans');
  }
  public set isApplyToErrorSpans(value: boolean | cdktf.IResolvable) {
    this._isApplyToErrorSpans = value;
  }
  public resetIsApplyToErrorSpans() {
    this._isApplyToErrorSpans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApplyToErrorSpansInput() {
    return this._isApplyToErrorSpans;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // satisfied_response_time - computed: true, optional: true, required: false
  private _satisfiedResponseTime?: number; 
  public get satisfiedResponseTime() {
    return this.getNumberAttribute('satisfied_response_time');
  }
  public set satisfiedResponseTime(value: number) {
    this._satisfiedResponseTime = value;
  }
  public resetSatisfiedResponseTime() {
    this._satisfiedResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satisfiedResponseTimeInput() {
    return this._satisfiedResponseTime;
  }

  // tolerating_response_time - computed: true, optional: true, required: false
  private _toleratingResponseTime?: number; 
  public get toleratingResponseTime() {
    return this.getNumberAttribute('tolerating_response_time');
  }
  public set toleratingResponseTime(value: number) {
    this._toleratingResponseTime = value;
  }
  public resetToleratingResponseTime() {
    this._toleratingResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleratingResponseTimeInput() {
    return this._toleratingResponseTime;
  }
}

export class ApmConfigConfigRulesList extends cdktf.ComplexList {
  public internalValue? : ApmConfigConfigRules[] | cdktf.IResolvable

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
  public get(index: number): ApmConfigConfigRulesOutputReference {
    return new ApmConfigConfigRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmConfigConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#create ApmConfigConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#delete ApmConfigConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#update ApmConfigConfig#update}
  */
  readonly update?: string;
}

export function apmConfigConfigTimeoutsToTerraform(struct?: ApmConfigConfigTimeouts | cdktf.IResolvable): any {
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


export function apmConfigConfigTimeoutsToHclTerraform(struct?: ApmConfigConfigTimeouts | cdktf.IResolvable): any {
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

export class ApmConfigConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApmConfigConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApmConfigConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config oci_apm_config_config}
*/
export class ApmConfigConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_config_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmConfigConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmConfigConfig to import
  * @param importFromId The id of the existing ApmConfigConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmConfigConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_config_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/apm_config_config oci_apm_config_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmConfigConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ApmConfigConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_config_config',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentVersion = config.agentVersion;
    this._apmDomainId = config.apmDomainId;
    this._attachInstallDir = config.attachInstallDir;
    this._configType = config.configType;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._filterId = config.filterId;
    this._filterText = config.filterText;
    this._freeformTags = config.freeformTags;
    this._group = config.group;
    this._id = config.id;
    this._managementAgentId = config.managementAgentId;
    this._matchAgentsWithAttributeValue = config.matchAgentsWithAttributeValue;
    this._namespace = config.namespace;
    this._opcDryRun = config.opcDryRun;
    this._options = config.options;
    this._processFilter = config.processFilter;
    this._runAsUser = config.runAsUser;
    this._serviceName = config.serviceName;
    this._config.internalValue = config.config;
    this._dimensions.internalValue = config.dimensions;
    this._inUseBy.internalValue = config.inUseBy;
    this._metrics.internalValue = config.metrics;
    this._overrides.internalValue = config.overrides;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: true, optional: true, required: false
  private _agentVersion?: string; 
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  public resetAgentVersion() {
    this._agentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion;
  }

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // attach_install_dir - computed: true, optional: true, required: false
  private _attachInstallDir?: string; 
  public get attachInstallDir() {
    return this.getStringAttribute('attach_install_dir');
  }
  public set attachInstallDir(value: string) {
    this._attachInstallDir = value;
  }
  public resetAttachInstallDir() {
    this._attachInstallDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachInstallDirInput() {
    return this._attachInstallDir;
  }

  // config_type - computed: false, optional: false, required: true
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // filter_id - computed: true, optional: true, required: false
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  public resetFilterId() {
    this._filterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // filter_text - computed: true, optional: true, required: false
  private _filterText?: string; 
  public get filterText() {
    return this.getStringAttribute('filter_text');
  }
  public set filterText(value: string) {
    this._filterText = value;
  }
  public resetFilterText() {
    this._filterText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTextInput() {
    return this._filterText;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // management_agent_id - computed: true, optional: true, required: false
  private _managementAgentId?: string; 
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }
  public set managementAgentId(value: string) {
    this._managementAgentId = value;
  }
  public resetManagementAgentId() {
    this._managementAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAgentIdInput() {
    return this._managementAgentId;
  }

  // match_agents_with_attribute_key - computed: true, optional: false, required: false
  public get matchAgentsWithAttributeKey() {
    return this.getListAttribute('match_agents_with_attribute_key');
  }

  // match_agents_with_attribute_value - computed: true, optional: true, required: false
  private _matchAgentsWithAttributeValue?: string; 
  public get matchAgentsWithAttributeValue() {
    return this.getStringAttribute('match_agents_with_attribute_value');
  }
  public set matchAgentsWithAttributeValue(value: string) {
    this._matchAgentsWithAttributeValue = value;
  }
  public resetMatchAgentsWithAttributeValue() {
    this._matchAgentsWithAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAgentsWithAttributeValueInput() {
    return this._matchAgentsWithAttributeValue;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // opc_dry_run - computed: true, optional: true, required: false
  private _opcDryRun?: string; 
  public get opcDryRun() {
    return this.getStringAttribute('opc_dry_run');
  }
  public set opcDryRun(value: string) {
    this._opcDryRun = value;
  }
  public resetOpcDryRun() {
    this._opcDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcDryRunInput() {
    return this._opcDryRun;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // process_filter - computed: true, optional: true, required: false
  private _processFilter?: string[]; 
  public get processFilter() {
    return this.getListAttribute('process_filter');
  }
  public set processFilter(value: string[]) {
    this._processFilter = value;
  }
  public resetProcessFilter() {
    this._processFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processFilterInput() {
    return this._processFilter;
  }

  // run_as_user - computed: true, optional: true, required: false
  private _runAsUser?: string; 
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }
  public set runAsUser(value: string) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // config - computed: false, optional: true, required: false
  private _config = new ApmConfigConfigConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ApmConfigConfigConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new ApmConfigConfigDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: ApmConfigConfigDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // in_use_by - computed: false, optional: true, required: false
  private _inUseBy = new ApmConfigConfigInUseByList(this, "in_use_by", false);
  public get inUseBy() {
    return this._inUseBy;
  }
  public putInUseBy(value: ApmConfigConfigInUseBy[] | cdktf.IResolvable) {
    this._inUseBy.internalValue = value;
  }
  public resetInUseBy() {
    this._inUseBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseByInput() {
    return this._inUseBy.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new ApmConfigConfigMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: ApmConfigConfigMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new ApmConfigConfigOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: ApmConfigConfigOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ApmConfigConfigRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ApmConfigConfigRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApmConfigConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApmConfigConfigTimeouts) {
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
      agent_version: cdktf.stringToTerraform(this._agentVersion),
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      attach_install_dir: cdktf.stringToTerraform(this._attachInstallDir),
      config_type: cdktf.stringToTerraform(this._configType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      filter_id: cdktf.stringToTerraform(this._filterId),
      filter_text: cdktf.stringToTerraform(this._filterText),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      management_agent_id: cdktf.stringToTerraform(this._managementAgentId),
      match_agents_with_attribute_value: cdktf.stringToTerraform(this._matchAgentsWithAttributeValue),
      namespace: cdktf.stringToTerraform(this._namespace),
      opc_dry_run: cdktf.stringToTerraform(this._opcDryRun),
      options: cdktf.stringToTerraform(this._options),
      process_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._processFilter),
      run_as_user: cdktf.stringToTerraform(this._runAsUser),
      service_name: cdktf.stringToTerraform(this._serviceName),
      config: apmConfigConfigConfigAToTerraform(this._config.internalValue),
      dimensions: cdktf.listMapper(apmConfigConfigDimensionsToTerraform, true)(this._dimensions.internalValue),
      in_use_by: cdktf.listMapper(apmConfigConfigInUseByToTerraform, true)(this._inUseBy.internalValue),
      metrics: cdktf.listMapper(apmConfigConfigMetricsToTerraform, true)(this._metrics.internalValue),
      overrides: apmConfigConfigOverridesToTerraform(this._overrides.internalValue),
      rules: cdktf.listMapper(apmConfigConfigRulesToTerraform, true)(this._rules.internalValue),
      timeouts: apmConfigConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_version: {
        value: cdktf.stringToHclTerraform(this._agentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attach_install_dir: {
        value: cdktf.stringToHclTerraform(this._attachInstallDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_type: {
        value: cdktf.stringToHclTerraform(this._configType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_id: {
        value: cdktf.stringToHclTerraform(this._filterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_text: {
        value: cdktf.stringToHclTerraform(this._filterText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      management_agent_id: {
        value: cdktf.stringToHclTerraform(this._managementAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_agents_with_attribute_value: {
        value: cdktf.stringToHclTerraform(this._matchAgentsWithAttributeValue),
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
      opc_dry_run: {
        value: cdktf.stringToHclTerraform(this._opcDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._processFilter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      run_as_user: {
        value: cdktf.stringToHclTerraform(this._runAsUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: apmConfigConfigConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmConfigConfigConfigAList",
      },
      dimensions: {
        value: cdktf.listMapperHcl(apmConfigConfigDimensionsToHclTerraform, true)(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmConfigConfigDimensionsList",
      },
      in_use_by: {
        value: cdktf.listMapperHcl(apmConfigConfigInUseByToHclTerraform, true)(this._inUseBy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmConfigConfigInUseByList",
      },
      metrics: {
        value: cdktf.listMapperHcl(apmConfigConfigMetricsToHclTerraform, true)(this._metrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmConfigConfigMetricsList",
      },
      overrides: {
        value: apmConfigConfigOverridesToHclTerraform(this._overrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmConfigConfigOverridesList",
      },
      rules: {
        value: cdktf.listMapperHcl(apmConfigConfigRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmConfigConfigRulesList",
      },
      timeouts: {
        value: apmConfigConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApmConfigConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
