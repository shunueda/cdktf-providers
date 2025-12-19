// https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_secure_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectSecureFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name for the secure file, unique per project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_secure_file#name DataGitlabProjectSecureFile#name}
  */
  readonly name?: string;
  /**
  * The ID or full path of the project the secure file resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_secure_file#project DataGitlabProjectSecureFile#project}
  */
  readonly project: string;
  /**
  * The id of the secure file in gitlab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_secure_file#secure_file_id DataGitlabProjectSecureFile#secure_file_id}
  */
  readonly secureFileId?: number;
}
export interface DataGitlabProjectSecureFileMetadataIssuer {
}

export function dataGitlabProjectSecureFileMetadataIssuerToTerraform(struct?: DataGitlabProjectSecureFileMetadataIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectSecureFileMetadataIssuerToHclTerraform(struct?: DataGitlabProjectSecureFileMetadataIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectSecureFileMetadataIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabProjectSecureFileMetadataIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectSecureFileMetadataIssuer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // c - computed: true, optional: false, required: false
  public get c() {
    return this.getStringAttribute('c');
  }

  // cn - computed: true, optional: false, required: false
  public get cn() {
    return this.getStringAttribute('cn');
  }

  // o - computed: true, optional: false, required: false
  public get o() {
    return this.getStringAttribute('o');
  }

  // ou - computed: true, optional: false, required: false
  public get ou() {
    return this.getStringAttribute('ou');
  }
}
export interface DataGitlabProjectSecureFileMetadataSubject {
}

export function dataGitlabProjectSecureFileMetadataSubjectToTerraform(struct?: DataGitlabProjectSecureFileMetadataSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectSecureFileMetadataSubjectToHclTerraform(struct?: DataGitlabProjectSecureFileMetadataSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectSecureFileMetadataSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabProjectSecureFileMetadataSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectSecureFileMetadataSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // c - computed: true, optional: false, required: false
  public get c() {
    return this.getStringAttribute('c');
  }

  // cn - computed: true, optional: false, required: false
  public get cn() {
    return this.getStringAttribute('cn');
  }

  // o - computed: true, optional: false, required: false
  public get o() {
    return this.getStringAttribute('o');
  }

  // ou - computed: true, optional: false, required: false
  public get ou() {
    return this.getStringAttribute('ou');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataGitlabProjectSecureFileMetadata {
}

export function dataGitlabProjectSecureFileMetadataToTerraform(struct?: DataGitlabProjectSecureFileMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectSecureFileMetadataToHclTerraform(struct?: DataGitlabProjectSecureFileMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectSecureFileMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabProjectSecureFileMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectSecureFileMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  private _issuer = new DataGitlabProjectSecureFileMetadataIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new DataGitlabProjectSecureFileMetadataSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_secure_file gitlab_project_secure_file}
*/
export class DataGitlabProjectSecureFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_secure_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectSecureFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectSecureFile to import
  * @param importFromId The id of the existing DataGitlabProjectSecureFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_secure_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectSecureFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_secure_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_secure_file gitlab_project_secure_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectSecureFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectSecureFileConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_secure_file',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.7.0',
        providerVersionConstraint: '18.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._project = config.project;
    this._secureFileId = config.secureFileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // checksum_algorithm - computed: true, optional: false, required: false
  public get checksumAlgorithm() {
    return this.getStringAttribute('checksum_algorithm');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataGitlabProjectSecureFileMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // secure_file_id - computed: true, optional: true, required: false
  private _secureFileId?: number; 
  public get secureFileId() {
    return this.getNumberAttribute('secure_file_id');
  }
  public set secureFileId(value: number) {
    this._secureFileId = value;
  }
  public resetSecureFileId() {
    this._secureFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureFileIdInput() {
    return this._secureFileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      secure_file_id: cdktf.numberToTerraform(this._secureFileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_file_id: {
        value: cdktf.numberToHclTerraform(this._secureFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
