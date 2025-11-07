// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudComplianceCustomFrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the custom compliance framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#description CloudComplianceCustomFramework#description}
  */
  readonly description: string;
  /**
  * The name of the custom compliance framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#name CloudComplianceCustomFramework#name}
  */
  readonly name: string;
  /**
  * Map of sections within the framework. Key is an immutable unique string. Changing the section key will trigger a complete delete and create of the section. Sections cannot exist without controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#sections CloudComplianceCustomFramework#sections}
  */
  readonly sections?: { [key: string]: CloudComplianceCustomFrameworkSections } | cdktf.IResolvable;
}
export interface CloudComplianceCustomFrameworkSectionsControls {
  /**
  * Description of the control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#description CloudComplianceCustomFramework#description}
  */
  readonly description: string;
  /**
  * Display name of the compliance framework control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#name CloudComplianceCustomFramework#name}
  */
  readonly name: string;
  /**
  * Set of rule IDs assigned to this control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#rules CloudComplianceCustomFramework#rules}
  */
  readonly rules?: string[];
}

export function cloudComplianceCustomFrameworkSectionsControlsToTerraform(struct?: CloudComplianceCustomFrameworkSectionsControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rules),
  }
}


export function cloudComplianceCustomFrameworkSectionsControlsToHclTerraform(struct?: CloudComplianceCustomFrameworkSectionsControls | cdktf.IResolvable): any {
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
    rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudComplianceCustomFrameworkSectionsControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CloudComplianceCustomFrameworkSectionsControls | cdktf.IResolvable | undefined {
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
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudComplianceCustomFrameworkSectionsControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._rules = undefined;
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
      this._rules = value.rules;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rules - computed: false, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return cdktf.Fn.tolist(this.getListAttribute('rules'));
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}

export class CloudComplianceCustomFrameworkSectionsControlsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: CloudComplianceCustomFrameworkSectionsControls } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CloudComplianceCustomFrameworkSectionsControlsOutputReference {
    return new CloudComplianceCustomFrameworkSectionsControlsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface CloudComplianceCustomFrameworkSections {
  /**
  * Map of controls within the section. Key is an immutable unique string. Changing the control key will trigger a complete delete and create of the control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#controls CloudComplianceCustomFramework#controls}
  */
  readonly controls: { [key: string]: CloudComplianceCustomFrameworkSectionsControls } | cdktf.IResolvable;
  /**
  * Display name of the compliance framework section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#name CloudComplianceCustomFramework#name}
  */
  readonly name: string;
}

export function cloudComplianceCustomFrameworkSectionsToTerraform(struct?: CloudComplianceCustomFrameworkSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controls: cdktf.hashMapper(cloudComplianceCustomFrameworkSectionsControlsToTerraform)(struct!.controls),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudComplianceCustomFrameworkSectionsToHclTerraform(struct?: CloudComplianceCustomFrameworkSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controls: {
      value: cdktf.hashMapperHcl(cloudComplianceCustomFrameworkSectionsControlsToHclTerraform)(struct!.controls),
      isBlock: true,
      type: "map",
      storageClassType: "CloudComplianceCustomFrameworkSectionsControlsMap",
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

export class CloudComplianceCustomFrameworkSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): CloudComplianceCustomFrameworkSections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controls = this._controls?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudComplianceCustomFrameworkSections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controls.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controls.internalValue = value.controls;
      this._name = value.name;
    }
  }

  // controls - computed: false, optional: false, required: true
  private _controls = new CloudComplianceCustomFrameworkSectionsControlsMap(this, "controls");
  public get controls() {
    return this._controls;
  }
  public putControls(value: { [key: string]: CloudComplianceCustomFrameworkSectionsControls } | cdktf.IResolvable) {
    this._controls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls.internalValue;
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
}

export class CloudComplianceCustomFrameworkSectionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: CloudComplianceCustomFrameworkSections } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): CloudComplianceCustomFrameworkSectionsOutputReference {
    return new CloudComplianceCustomFrameworkSectionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework crowdstrike_cloud_compliance_custom_framework}
*/
export class CloudComplianceCustomFramework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_compliance_custom_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudComplianceCustomFramework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudComplianceCustomFramework to import
  * @param importFromId The id of the existing CloudComplianceCustomFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudComplianceCustomFramework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_compliance_custom_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/cloud_compliance_custom_framework crowdstrike_cloud_compliance_custom_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudComplianceCustomFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: CloudComplianceCustomFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_compliance_custom_framework',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.43'
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
    this._name = config.name;
    this._sections.internalValue = config.sections;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sections - computed: false, optional: true, required: false
  private _sections = new CloudComplianceCustomFrameworkSectionsMap(this, "sections");
  public get sections() {
    return this._sections;
  }
  public putSections(value: { [key: string]: CloudComplianceCustomFrameworkSections } | cdktf.IResolvable) {
    this._sections.internalValue = value;
  }
  public resetSections() {
    this._sections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionsInput() {
    return this._sections.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      sections: cdktf.hashMapper(cloudComplianceCustomFrameworkSectionsToTerraform)(this._sections.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sections: {
        value: cdktf.hashMapperHcl(cloudComplianceCustomFrameworkSectionsToHclTerraform)(this._sections.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "CloudComplianceCustomFrameworkSectionsMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
