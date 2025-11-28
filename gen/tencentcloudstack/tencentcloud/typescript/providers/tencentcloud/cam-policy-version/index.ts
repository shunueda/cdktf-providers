// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CamPolicyVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version#id CamPolicyVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Strategic text information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version#policy_document CamPolicyVersion#policy_document}
  */
  readonly policyDocument: string;
  /**
  * Strategy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version#policy_id CamPolicyVersion#policy_id}
  */
  readonly policyId: number;
  /**
  * Whether to set as a version of the current strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version#set_as_default CamPolicyVersion#set_as_default}
  */
  readonly setAsDefault: boolean | cdktf.IResolvable;
  /**
  * policy_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version#policy_version CamPolicyVersion#policy_version}
  */
  readonly policyVersion?: CamPolicyVersionPolicyVersion[] | cdktf.IResolvable;
}
export interface CamPolicyVersionPolicyVersion {
}

export function camPolicyVersionPolicyVersionToTerraform(struct?: CamPolicyVersionPolicyVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function camPolicyVersionPolicyVersionToHclTerraform(struct?: CamPolicyVersionPolicyVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CamPolicyVersionPolicyVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CamPolicyVersionPolicyVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CamPolicyVersionPolicyVersion | cdktf.IResolvable | undefined) {
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

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // document - computed: true, optional: false, required: false
  public get document() {
    return this.getStringAttribute('document');
  }

  // is_default_version - computed: true, optional: false, required: false
  public get isDefaultVersion() {
    return this.getNumberAttribute('is_default_version');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }
}

export class CamPolicyVersionPolicyVersionList extends cdktf.ComplexList {
  public internalValue? : CamPolicyVersionPolicyVersion[] | cdktf.IResolvable

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
  public get(index: number): CamPolicyVersionPolicyVersionOutputReference {
    return new CamPolicyVersionPolicyVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version tencentcloud_cam_policy_version}
*/
export class CamPolicyVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_policy_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CamPolicyVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CamPolicyVersion to import
  * @param importFromId The id of the existing CamPolicyVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CamPolicyVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_policy_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/cam_policy_version tencentcloud_cam_policy_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CamPolicyVersionConfig
  */
  public constructor(scope: Construct, id: string, config: CamPolicyVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_policy_version',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._policyDocument = config.policyDocument;
    this._policyId = config.policyId;
    this._setAsDefault = config.setAsDefault;
    this._policyVersion.internalValue = config.policyVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // set_as_default - computed: false, optional: false, required: true
  private _setAsDefault?: boolean | cdktf.IResolvable; 
  public get setAsDefault() {
    return this.getBooleanAttribute('set_as_default');
  }
  public set setAsDefault(value: boolean | cdktf.IResolvable) {
    this._setAsDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsDefaultInput() {
    return this._setAsDefault;
  }

  // policy_version - computed: false, optional: true, required: false
  private _policyVersion = new CamPolicyVersionPolicyVersionList(this, "policy_version", false);
  public get policyVersion() {
    return this._policyVersion;
  }
  public putPolicyVersion(value: CamPolicyVersionPolicyVersion[] | cdktf.IResolvable) {
    this._policyVersion.internalValue = value;
  }
  public resetPolicyVersion() {
    this._policyVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyVersionInput() {
    return this._policyVersion.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_document: cdktf.stringToTerraform(this._policyDocument),
      policy_id: cdktf.numberToTerraform(this._policyId),
      set_as_default: cdktf.booleanToTerraform(this._setAsDefault),
      policy_version: cdktf.listMapper(camPolicyVersionPolicyVersionToTerraform, true)(this._policyVersion.internalValue),
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
      policy_document: {
        value: cdktf.stringToHclTerraform(this._policyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_as_default: {
        value: cdktf.booleanToHclTerraform(this._setAsDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_version: {
        value: cdktf.listMapperHcl(camPolicyVersionPolicyVersionToHclTerraform, true)(this._policyVersion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CamPolicyVersionPolicyVersionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
