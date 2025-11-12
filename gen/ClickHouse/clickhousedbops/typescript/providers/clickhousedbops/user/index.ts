// https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the cluster to create the resource into. If omitted, resource will be created on the replica hit by the query.
  * This field must be left null when using a ClickHouse Cloud cluster.
  * When using a self hosted ClickHouse instance, this field should only be set when there is more than one replica and you are not using 'replicated' storage for user_directory.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/user#cluster_name User#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Name of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * SHA256 hash of the password to be set for the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/user#password_sha256_hash_wo User#password_sha256_hash_wo}
  */
  readonly passwordSha256HashWo: string;
  /**
  * Version of the password_sha256_hash_wo field. Bump this value to require a force update of the password on the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/user#password_sha256_hash_wo_version User#password_sha256_hash_wo_version}
  */
  readonly passwordSha256HashWoVersion: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/user clickhousedbops_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhousedbops_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhousedbops_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/user clickhousedbops_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhousedbops_user',
      terraformGeneratorMetadata: {
        providerName: 'clickhousedbops',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._name = config.name;
    this._passwordSha256HashWo = config.passwordSha256HashWo;
    this._passwordSha256HashWoVersion = config.passwordSha256HashWoVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // password_sha256_hash_wo - computed: false, optional: false, required: true
  private _passwordSha256HashWo?: string; 
  public get passwordSha256HashWo() {
    return this.getStringAttribute('password_sha256_hash_wo');
  }
  public set passwordSha256HashWo(value: string) {
    this._passwordSha256HashWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSha256HashWoInput() {
    return this._passwordSha256HashWo;
  }

  // password_sha256_hash_wo_version - computed: false, optional: false, required: true
  private _passwordSha256HashWoVersion?: number; 
  public get passwordSha256HashWoVersion() {
    return this.getNumberAttribute('password_sha256_hash_wo_version');
  }
  public set passwordSha256HashWoVersion(value: number) {
    this._passwordSha256HashWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSha256HashWoVersionInput() {
    return this._passwordSha256HashWoVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      name: cdktf.stringToTerraform(this._name),
      password_sha256_hash_wo: cdktf.stringToTerraform(this._passwordSha256HashWo),
      password_sha256_hash_wo_version: cdktf.numberToTerraform(this._passwordSha256HashWoVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      password_sha256_hash_wo: {
        value: cdktf.stringToHclTerraform(this._passwordSha256HashWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_sha256_hash_wo_version: {
        value: cdktf.numberToHclTerraform(this._passwordSha256HashWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
