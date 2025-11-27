// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployCommunityStepTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the community step template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#id DataOctopusdeployCommunityStepTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Community Step Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#name DataOctopusdeployCommunityStepTemplate#name}
  */
  readonly name?: string;
  /**
  * Website of the Community Step Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#website DataOctopusdeployCommunityStepTemplate#website}
  */
  readonly website?: string;
}
export interface DataOctopusdeployCommunityStepTemplateStepsPackagesProperties {
  /**
  * If the package should extract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#extract DataOctopusdeployCommunityStepTemplate#extract}
  */
  readonly extract?: string;
  /**
  * The name of the package parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#package_parameter_name DataOctopusdeployCommunityStepTemplate#package_parameter_name}
  */
  readonly packageParameterName?: string;
  /**
  * The purpose of this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#purpose DataOctopusdeployCommunityStepTemplate#purpose}
  */
  readonly purpose?: string;
  /**
  * The selection mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#selection_mode DataOctopusdeployCommunityStepTemplate#selection_mode}
  */
  readonly selectionMode: string;
}

export function dataOctopusdeployCommunityStepTemplateStepsPackagesPropertiesToTerraform(struct?: DataOctopusdeployCommunityStepTemplateStepsPackagesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract: cdktf.stringToTerraform(struct!.extract),
    package_parameter_name: cdktf.stringToTerraform(struct!.packageParameterName),
    purpose: cdktf.stringToTerraform(struct!.purpose),
    selection_mode: cdktf.stringToTerraform(struct!.selectionMode),
  }
}


export function dataOctopusdeployCommunityStepTemplateStepsPackagesPropertiesToHclTerraform(struct?: DataOctopusdeployCommunityStepTemplateStepsPackagesProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extract: {
      value: cdktf.stringToHclTerraform(struct!.extract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.packageParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purpose: {
      value: cdktf.stringToHclTerraform(struct!.purpose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_mode: {
      value: cdktf.stringToHclTerraform(struct!.selectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOctopusdeployCommunityStepTemplateStepsPackagesPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOctopusdeployCommunityStepTemplateStepsPackagesProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extract !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract;
    }
    if (this._packageParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageParameterName = this._packageParameterName;
    }
    if (this._purpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.purpose = this._purpose;
    }
    if (this._selectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMode = this._selectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployCommunityStepTemplateStepsPackagesProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extract = undefined;
      this._packageParameterName = undefined;
      this._purpose = undefined;
      this._selectionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extract = value.extract;
      this._packageParameterName = value.packageParameterName;
      this._purpose = value.purpose;
      this._selectionMode = value.selectionMode;
    }
  }

  // extract - computed: true, optional: true, required: false
  private _extract?: string; 
  public get extract() {
    return this.getStringAttribute('extract');
  }
  public set extract(value: string) {
    this._extract = value;
  }
  public resetExtract() {
    this._extract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract;
  }

  // package_parameter_name - computed: true, optional: true, required: false
  private _packageParameterName?: string; 
  public get packageParameterName() {
    return this.getStringAttribute('package_parameter_name');
  }
  public set packageParameterName(value: string) {
    this._packageParameterName = value;
  }
  public resetPackageParameterName() {
    this._packageParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageParameterNameInput() {
    return this._packageParameterName;
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // selection_mode - computed: true, optional: false, required: true
  private _selectionMode?: string; 
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
  public set selectionMode(value: string) {
    this._selectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }
}
export interface DataOctopusdeployCommunityStepTemplateStepsPackages {
  /**
  * Acquisition location for the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#acquisition_location DataOctopusdeployCommunityStepTemplate#acquisition_location}
  */
  readonly acquisitionLocation?: string;
  /**
  * ID of the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#feed_id DataOctopusdeployCommunityStepTemplate#feed_id}
  */
  readonly feedId: string;
  /**
  * Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#name DataOctopusdeployCommunityStepTemplate#name}
  */
  readonly name: string;
  /**
  * The ID of the package to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#package_id DataOctopusdeployCommunityStepTemplate#package_id}
  */
  readonly packageId?: string;
  /**
  * Properties for the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#properties DataOctopusdeployCommunityStepTemplate#properties}
  */
  readonly properties: DataOctopusdeployCommunityStepTemplateStepsPackagesProperties;
}

export function dataOctopusdeployCommunityStepTemplateStepsPackagesToTerraform(struct?: DataOctopusdeployCommunityStepTemplateStepsPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acquisition_location: cdktf.stringToTerraform(struct!.acquisitionLocation),
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    name: cdktf.stringToTerraform(struct!.name),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    properties: dataOctopusdeployCommunityStepTemplateStepsPackagesPropertiesToTerraform(struct!.properties),
  }
}


export function dataOctopusdeployCommunityStepTemplateStepsPackagesToHclTerraform(struct?: DataOctopusdeployCommunityStepTemplateStepsPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acquisition_location: {
      value: cdktf.stringToHclTerraform(struct!.acquisitionLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
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
    package_id: {
      value: cdktf.stringToHclTerraform(struct!.packageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataOctopusdeployCommunityStepTemplateStepsPackagesPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataOctopusdeployCommunityStepTemplateStepsPackagesProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOctopusdeployCommunityStepTemplateStepsPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployCommunityStepTemplateStepsPackages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acquisitionLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.acquisitionLocation = this._acquisitionLocation;
    }
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageId = this._packageId;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployCommunityStepTemplateStepsPackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acquisitionLocation = undefined;
      this._feedId = undefined;
      this._name = undefined;
      this._packageId = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acquisitionLocation = value.acquisitionLocation;
      this._feedId = value.feedId;
      this._name = value.name;
      this._packageId = value.packageId;
      this._properties.internalValue = value.properties;
    }
  }

  // acquisition_location - computed: true, optional: true, required: false
  private _acquisitionLocation?: string; 
  public get acquisitionLocation() {
    return this.getStringAttribute('acquisition_location');
  }
  public set acquisitionLocation(value: string) {
    this._acquisitionLocation = value;
  }
  public resetAcquisitionLocation() {
    this._acquisitionLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acquisitionLocationInput() {
    return this._acquisitionLocation;
  }

  // feed_id - computed: true, optional: false, required: true
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
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

  // package_id - computed: true, optional: true, required: false
  private _packageId?: string; 
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  public resetPackageId() {
    this._packageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
  }

  // properties - computed: true, optional: false, required: true
  private _properties = new DataOctopusdeployCommunityStepTemplateStepsPackagesPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataOctopusdeployCommunityStepTemplateStepsPackagesProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class DataOctopusdeployCommunityStepTemplateStepsPackagesList extends cdktf.ComplexList {
  public internalValue? : DataOctopusdeployCommunityStepTemplateStepsPackages[] | cdktf.IResolvable

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
  public get(index: number): DataOctopusdeployCommunityStepTemplateStepsPackagesOutputReference {
    return new DataOctopusdeployCommunityStepTemplateStepsPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployCommunityStepTemplateStepsParameters {
  /**
  * Use this attribute to set a sensitive default value for the parameter when display settings are set to 'Sensitive'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#default_sensitive_value DataOctopusdeployCommunityStepTemplate#default_sensitive_value}
  */
  readonly defaultSensitiveValue?: string;
  /**
  * A default value for the parameter, if applicable. This can be a hard-coded value or a variable reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#default_value DataOctopusdeployCommunityStepTemplate#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The display settings for the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#display_settings DataOctopusdeployCommunityStepTemplate#display_settings}
  */
  readonly displaySettings?: { [key: string]: string };
  /**
  * The help presented alongside the parameter input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#help_text DataOctopusdeployCommunityStepTemplate#help_text}
  */
  readonly helpText?: string;
  /**
  * The id for the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#id DataOctopusdeployCommunityStepTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The label shown beside the parameter when presented in the deployment process. Example: `Server name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#label DataOctopusdeployCommunityStepTemplate#label}
  */
  readonly label?: string;
  /**
  * The name of the variable set by the parameter. The name can contain letters, digits, dashes and periods. Example: `ServerName`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#name DataOctopusdeployCommunityStepTemplate#name}
  */
  readonly name: string;
}

export function dataOctopusdeployCommunityStepTemplateStepsParametersToTerraform(struct?: DataOctopusdeployCommunityStepTemplateStepsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sensitive_value: cdktf.stringToTerraform(struct!.defaultSensitiveValue),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    display_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.displaySettings),
    help_text: cdktf.stringToTerraform(struct!.helpText),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataOctopusdeployCommunityStepTemplateStepsParametersToHclTerraform(struct?: DataOctopusdeployCommunityStepTemplateStepsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sensitive_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultSensitiveValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.displaySettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    help_text: {
      value: cdktf.stringToHclTerraform(struct!.helpText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOctopusdeployCommunityStepTemplateStepsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployCommunityStepTemplateStepsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSensitiveValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSensitiveValue = this._defaultSensitiveValue;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._displaySettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.displaySettings = this._displaySettings;
    }
    if (this._helpText !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpText = this._helpText;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployCommunityStepTemplateStepsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSensitiveValue = undefined;
      this._defaultValue = undefined;
      this._displaySettings = undefined;
      this._helpText = undefined;
      this._id = undefined;
      this._label = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSensitiveValue = value.defaultSensitiveValue;
      this._defaultValue = value.defaultValue;
      this._displaySettings = value.displaySettings;
      this._helpText = value.helpText;
      this._id = value.id;
      this._label = value.label;
      this._name = value.name;
    }
  }

  // default_sensitive_value - computed: true, optional: true, required: false
  private _defaultSensitiveValue?: string; 
  public get defaultSensitiveValue() {
    return this.getStringAttribute('default_sensitive_value');
  }
  public set defaultSensitiveValue(value: string) {
    this._defaultSensitiveValue = value;
  }
  public resetDefaultSensitiveValue() {
    this._defaultSensitiveValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSensitiveValueInput() {
    return this._defaultSensitiveValue;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // display_settings - computed: true, optional: true, required: false
  private _displaySettings?: { [key: string]: string }; 
  public get displaySettings() {
    return this.getStringMapAttribute('display_settings');
  }
  public set displaySettings(value: { [key: string]: string }) {
    this._displaySettings = value;
  }
  public resetDisplaySettings() {
    this._displaySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaySettingsInput() {
    return this._displaySettings;
  }

  // help_text - computed: true, optional: true, required: false
  private _helpText?: string; 
  public get helpText() {
    return this.getStringAttribute('help_text');
  }
  public set helpText(value: string) {
    this._helpText = value;
  }
  public resetHelpText() {
    this._helpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpTextInput() {
    return this._helpText;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataOctopusdeployCommunityStepTemplateStepsParametersList extends cdktf.ComplexList {
  public internalValue? : DataOctopusdeployCommunityStepTemplateStepsParameters[] | cdktf.IResolvable

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
  public get(index: number): DataOctopusdeployCommunityStepTemplateStepsParametersOutputReference {
    return new DataOctopusdeployCommunityStepTemplateStepsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployCommunityStepTemplateSteps {
  /**
  * Package information for the community_step_template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#packages DataOctopusdeployCommunityStepTemplate#packages}
  */
  readonly packages: DataOctopusdeployCommunityStepTemplateStepsPackages[] | cdktf.IResolvable;
  /**
  * List of parameters that can be used in community_step_template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#parameters DataOctopusdeployCommunityStepTemplate#parameters}
  */
  readonly parameters: DataOctopusdeployCommunityStepTemplateStepsParameters[] | cdktf.IResolvable;
}

export function dataOctopusdeployCommunityStepTemplateStepsToTerraform(struct?: DataOctopusdeployCommunityStepTemplateSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    packages: cdktf.listMapper(dataOctopusdeployCommunityStepTemplateStepsPackagesToTerraform, false)(struct!.packages),
    parameters: cdktf.listMapper(dataOctopusdeployCommunityStepTemplateStepsParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataOctopusdeployCommunityStepTemplateStepsToHclTerraform(struct?: DataOctopusdeployCommunityStepTemplateSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    packages: {
      value: cdktf.listMapperHcl(dataOctopusdeployCommunityStepTemplateStepsPackagesToHclTerraform, false)(struct!.packages),
      isBlock: true,
      type: "list",
      storageClassType: "DataOctopusdeployCommunityStepTemplateStepsPackagesList",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataOctopusdeployCommunityStepTemplateStepsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataOctopusdeployCommunityStepTemplateStepsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOctopusdeployCommunityStepTemplateStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployCommunityStepTemplateSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployCommunityStepTemplateSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._packages.internalValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._packages.internalValue = value.packages;
      this._parameters.internalValue = value.parameters;
    }
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // history_url - computed: true, optional: false, required: false
  public get historyUrl() {
    return this.getStringAttribute('history_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // packages - computed: true, optional: false, required: true
  private _packages = new DataOctopusdeployCommunityStepTemplateStepsPackagesList(this, "packages", false);
  public get packages() {
    return this._packages;
  }
  public putPackages(value: DataOctopusdeployCommunityStepTemplateStepsPackages[] | cdktf.IResolvable) {
    this._packages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages.internalValue;
  }

  // parameters - computed: true, optional: false, required: true
  private _parameters = new DataOctopusdeployCommunityStepTemplateStepsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataOctopusdeployCommunityStepTemplateStepsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // website - computed: true, optional: false, required: false
  public get website() {
    return this.getStringAttribute('website');
  }
}

export class DataOctopusdeployCommunityStepTemplateStepsList extends cdktf.ComplexList {
  public internalValue? : DataOctopusdeployCommunityStepTemplateSteps[] | cdktf.IResolvable

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
  public get(index: number): DataOctopusdeployCommunityStepTemplateStepsOutputReference {
    return new DataOctopusdeployCommunityStepTemplateStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template octopusdeploy_community_step_template}
*/
export class DataOctopusdeployCommunityStepTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_community_step_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployCommunityStepTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployCommunityStepTemplate to import
  * @param importFromId The id of the existing DataOctopusdeployCommunityStepTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployCommunityStepTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_community_step_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/data-sources/community_step_template octopusdeploy_community_step_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployCommunityStepTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployCommunityStepTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_community_step_template',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
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
    this._name = config.name;
    this._website = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // steps - computed: true, optional: false, required: false
  private _steps = new DataOctopusdeployCommunityStepTemplateStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // website - computed: false, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      website: cdktf.stringToTerraform(this._website),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website: {
        value: cdktf.stringToHclTerraform(this._website),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
