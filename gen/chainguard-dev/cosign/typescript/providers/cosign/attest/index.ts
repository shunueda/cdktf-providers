// https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttestConfig extends cdktf.TerraformMetaArguments {
  /**
  * How to handle conflicting predicate values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#conflict Attest#conflict}
  */
  readonly conflict?: string;
  /**
  * Address of sigstore PKI server (default https://fulcio.sigstore.dev).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#fulcio_url Attest#fulcio_url}
  */
  readonly fulcioUrl?: string;
  /**
  * The digest of the container image to attest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#image Attest#image}
  */
  readonly image: string;
  /**
  * The JSON body of the in-toto predicate's claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#predicate Attest#predicate}
  */
  readonly predicate?: string;
  /**
  * The in-toto predicate type of the claim being attested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#predicate_type Attest#predicate_type}
  */
  readonly predicateType?: string;
  /**
  * Address of rekor transparency log server (default https://rekor.sigstore.dev).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#rekor_url Attest#rekor_url}
  */
  readonly rekorUrl?: string;
  /**
  * predicate_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#predicate_file Attest#predicate_file}
  */
  readonly predicateFile?: AttestPredicateFile[] | cdktf.IResolvable;
  /**
  * predicates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#predicates Attest#predicates}
  */
  readonly predicates?: AttestPredicates[] | cdktf.IResolvable;
}
export interface AttestPredicateFile {
  /**
  * The path to a file containing the predicate to attest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#path Attest#path}
  */
  readonly path?: string;
  /**
  * The sha256 hex hash of the predicate body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#sha256 Attest#sha256}
  */
  readonly sha256?: string;
}

export function attestPredicateFileToTerraform(struct?: AttestPredicateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    sha256: cdktf.stringToTerraform(struct!.sha256),
  }
}


export function attestPredicateFileToHclTerraform(struct?: AttestPredicateFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttestPredicateFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AttestPredicateFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttestPredicateFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._sha256 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._sha256 = value.sha256;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }
}

export class AttestPredicateFileList extends cdktf.ComplexList {
  public internalValue? : AttestPredicateFile[] | cdktf.IResolvable

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
  public get(index: number): AttestPredicateFileOutputReference {
    return new AttestPredicateFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttestPredicatesFile {
  /**
  * The path to a file containing the predicate to attest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#path Attest#path}
  */
  readonly path?: string;
  /**
  * The sha256 hex hash of the predicate body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#sha256 Attest#sha256}
  */
  readonly sha256?: string;
}

export function attestPredicatesFileToTerraform(struct?: AttestPredicatesFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    sha256: cdktf.stringToTerraform(struct!.sha256),
  }
}


export function attestPredicatesFileToHclTerraform(struct?: AttestPredicatesFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttestPredicatesFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AttestPredicatesFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttestPredicatesFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._sha256 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._sha256 = value.sha256;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }
}

export class AttestPredicatesFileList extends cdktf.ComplexList {
  public internalValue? : AttestPredicatesFile[] | cdktf.IResolvable

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
  public get(index: number): AttestPredicatesFileOutputReference {
    return new AttestPredicatesFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttestPredicates {
  /**
  * The JSON body of the in-toto predicate's claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#json Attest#json}
  */
  readonly json?: string;
  /**
  * The in-toto predicate type of the claim being attested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#type Attest#type}
  */
  readonly type: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#file Attest#file}
  */
  readonly file?: AttestPredicatesFile[] | cdktf.IResolvable;
}

export function attestPredicatesToTerraform(struct?: AttestPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.stringToTerraform(struct!.json),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(attestPredicatesFileToTerraform, true)(struct!.file),
  }
}


export function attestPredicatesToHclTerraform(struct?: AttestPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.listMapperHcl(attestPredicatesFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "AttestPredicatesFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttestPredicatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AttestPredicates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttestPredicates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._json = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._json = value.json;
      this._type = value.type;
      this._file.internalValue = value.file;
    }
  }

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // file - computed: false, optional: true, required: false
  private _file = new AttestPredicatesFileList(this, "file", false);
  public get file() {
    return this._file;
  }
  public putFile(value: AttestPredicatesFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}

export class AttestPredicatesList extends cdktf.ComplexList {
  public internalValue? : AttestPredicates[] | cdktf.IResolvable

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
  public get(index: number): AttestPredicatesOutputReference {
    return new AttestPredicatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest cosign_attest}
*/
export class Attest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosign_attest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Attest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Attest to import
  * @param importFromId The id of the existing Attest that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Attest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosign_attest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/resources/attest cosign_attest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttestConfig
  */
  public constructor(scope: Construct, id: string, config: AttestConfig) {
    super(scope, id, {
      terraformResourceType: 'cosign_attest',
      terraformGeneratorMetadata: {
        providerName: 'cosign',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conflict = config.conflict;
    this._fulcioUrl = config.fulcioUrl;
    this._image = config.image;
    this._predicate = config.predicate;
    this._predicateType = config.predicateType;
    this._rekorUrl = config.rekorUrl;
    this._predicateFile.internalValue = config.predicateFile;
    this._predicates.internalValue = config.predicates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attested_ref - computed: true, optional: false, required: false
  public get attestedRef() {
    return this.getStringAttribute('attested_ref');
  }

  // conflict - computed: true, optional: true, required: false
  private _conflict?: string; 
  public get conflict() {
    return this.getStringAttribute('conflict');
  }
  public set conflict(value: string) {
    this._conflict = value;
  }
  public resetConflict() {
    this._conflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictInput() {
    return this._conflict;
  }

  // fulcio_url - computed: true, optional: true, required: false
  private _fulcioUrl?: string; 
  public get fulcioUrl() {
    return this.getStringAttribute('fulcio_url');
  }
  public set fulcioUrl(value: string) {
    this._fulcioUrl = value;
  }
  public resetFulcioUrl() {
    this._fulcioUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fulcioUrlInput() {
    return this._fulcioUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate?: string; 
  public get predicate() {
    return this.getStringAttribute('predicate');
  }
  public set predicate(value: string) {
    this._predicate = value;
  }
  public resetPredicate() {
    this._predicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate;
  }

  // predicate_type - computed: false, optional: true, required: false
  private _predicateType?: string; 
  public get predicateType() {
    return this.getStringAttribute('predicate_type');
  }
  public set predicateType(value: string) {
    this._predicateType = value;
  }
  public resetPredicateType() {
    this._predicateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateTypeInput() {
    return this._predicateType;
  }

  // rekor_url - computed: true, optional: true, required: false
  private _rekorUrl?: string; 
  public get rekorUrl() {
    return this.getStringAttribute('rekor_url');
  }
  public set rekorUrl(value: string) {
    this._rekorUrl = value;
  }
  public resetRekorUrl() {
    this._rekorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekorUrlInput() {
    return this._rekorUrl;
  }

  // predicate_file - computed: false, optional: true, required: false
  private _predicateFile = new AttestPredicateFileList(this, "predicate_file", false);
  public get predicateFile() {
    return this._predicateFile;
  }
  public putPredicateFile(value: AttestPredicateFile[] | cdktf.IResolvable) {
    this._predicateFile.internalValue = value;
  }
  public resetPredicateFile() {
    this._predicateFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateFileInput() {
    return this._predicateFile.internalValue;
  }

  // predicates - computed: false, optional: true, required: false
  private _predicates = new AttestPredicatesList(this, "predicates", false);
  public get predicates() {
    return this._predicates;
  }
  public putPredicates(value: AttestPredicates[] | cdktf.IResolvable) {
    this._predicates.internalValue = value;
  }
  public resetPredicates() {
    this._predicates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conflict: cdktf.stringToTerraform(this._conflict),
      fulcio_url: cdktf.stringToTerraform(this._fulcioUrl),
      image: cdktf.stringToTerraform(this._image),
      predicate: cdktf.stringToTerraform(this._predicate),
      predicate_type: cdktf.stringToTerraform(this._predicateType),
      rekor_url: cdktf.stringToTerraform(this._rekorUrl),
      predicate_file: cdktf.listMapper(attestPredicateFileToTerraform, true)(this._predicateFile.internalValue),
      predicates: cdktf.listMapper(attestPredicatesToTerraform, true)(this._predicates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conflict: {
        value: cdktf.stringToHclTerraform(this._conflict),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fulcio_url: {
        value: cdktf.stringToHclTerraform(this._fulcioUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predicate: {
        value: cdktf.stringToHclTerraform(this._predicate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predicate_type: {
        value: cdktf.stringToHclTerraform(this._predicateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rekor_url: {
        value: cdktf.stringToHclTerraform(this._rekorUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predicate_file: {
        value: cdktf.listMapperHcl(attestPredicateFileToHclTerraform, true)(this._predicateFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttestPredicateFileList",
      },
      predicates: {
        value: cdktf.listMapperHcl(attestPredicatesToHclTerraform, true)(this._predicates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttestPredicatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
