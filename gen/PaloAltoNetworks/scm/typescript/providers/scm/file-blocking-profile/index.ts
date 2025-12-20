// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileBlockingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#description FileBlockingProfile#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#device FileBlockingProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#folder FileBlockingProfile#folder}
  */
  readonly folder?: string;
  /**
  * The name of the file blocking profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#name FileBlockingProfile#name}
  */
  readonly name: string;
  /**
  * A list of file blocking rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#rules FileBlockingProfile#rules}
  */
  readonly rules?: FileBlockingProfileRules[] | cdktf.IResolvable;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#snippet FileBlockingProfile#snippet}
  */
  readonly snippet?: string;
}
export interface FileBlockingProfileRules {
  /**
  * The action to take when the rule match criteria is met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#action FileBlockingProfile#action}
  */
  readonly action: string;
  /**
  * The application transferring the files (App-ID naming)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#application FileBlockingProfile#application}
  */
  readonly application: string[];
  /**
  * The direction of the file transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#direction FileBlockingProfile#direction}
  */
  readonly direction: string;
  /**
  * The file type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#file_type FileBlockingProfile#file_type}
  */
  readonly fileType: string[];
  /**
  * The name of the file blocking rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#name FileBlockingProfile#name}
  */
  readonly name: string;
}

export function fileBlockingProfileRulesToTerraform(struct?: FileBlockingProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.application),
    direction: cdktf.stringToTerraform(struct!.direction),
    file_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fileBlockingProfileRulesToHclTerraform(struct?: FileBlockingProfileRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.application),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class FileBlockingProfileRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileBlockingProfileRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileBlockingProfileRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._application = undefined;
      this._direction = undefined;
      this._fileType = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._application = value.application;
      this._direction = value.direction;
      this._fileType = value.fileType;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // application - computed: false, optional: false, required: true
  private _application?: string[]; 
  public get application() {
    return this.getListAttribute('application');
  }
  public set application(value: string[]) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // file_type - computed: false, optional: false, required: true
  private _fileType?: string[]; 
  public get fileType() {
    return this.getListAttribute('file_type');
  }
  public set fileType(value: string[]) {
    this._fileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
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

export class FileBlockingProfileRulesList extends cdktf.ComplexList {
  public internalValue? : FileBlockingProfileRules[] | cdktf.IResolvable

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
  public get(index: number): FileBlockingProfileRulesOutputReference {
    return new FileBlockingProfileRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile scm_file_blocking_profile}
*/
export class FileBlockingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_file_blocking_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileBlockingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileBlockingProfile to import
  * @param importFromId The id of the existing FileBlockingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileBlockingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_file_blocking_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/file_blocking_profile scm_file_blocking_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileBlockingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: FileBlockingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_file_blocking_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
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
    this._name = config.name;
    this._rules.internalValue = config.rules;
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
  private _rules = new FileBlockingProfileRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: FileBlockingProfileRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(fileBlockingProfileRulesToTerraform, false)(this._rules.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(fileBlockingProfileRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileBlockingProfileRulesList",
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
